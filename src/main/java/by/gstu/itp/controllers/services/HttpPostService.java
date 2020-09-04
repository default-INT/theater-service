package by.gstu.itp.controllers.services;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.beans.Play;
import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.DAOFactory;
import by.gstu.itp.models.data.dao.UserDAO;
import by.gstu.itp.models.exceptions.LogInFailedException;
import by.gstu.itp.models.exceptions.RegistrationFailedException;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public final class HttpPostService {
    private static final DateTimeFormatter JSON_DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private static final Gson GSON = UtilFactory.getGSON();

    private HttpPostService() {}

    public static String logIn(JsonObject jsonObject) {
        String email = jsonObject.get("email").getAsString();
        String password = jsonObject.get("password").getAsString();
        User user = new User(email, password);
        Optional<User> loginUser = DAOFactory.getDAOFactory().getUserDAO()
                .logIn(user);
        if (loginUser.isEmpty()) {
            throw new LogInFailedException(loginUser.orElse(null));
        }
        return GSON.toJson(loginUser, User.class);
    }

    public static String registration(JsonObject jsonObject) {
        User newUser = GSON.fromJson(jsonObject, User.class);
        UserDAO userDAO = DAOFactory.getDAOFactory().getUserDAO();
        userDAO.add(newUser);
        if (newUser.getId() == 0) {
            throw new RegistrationFailedException(newUser);
        }
        return GSON.toJson(newUser, User.class);
    }

    public static String addDate(JsonObject jsonObject) {
        LocalDate localDate = LocalDate.from(JSON_DATE_FORMATTER.parse(jsonObject.get("date").getAsString()));
        int playId = jsonObject.get("playId").getAsInt();
        boolean check = DAOFactory.getDAOFactory().getDateDAO()
                .readAll()
                .allMatch(date -> date.getDate().equals(localDate) && date.getPlayId() == playId);
        if (check) {
            throw new IllegalArgumentException();
        }
        Play play = DAOFactory.getDAOFactory().getPlayDAO()
                .readAll()
                .filter(p -> p.getId() == playId)
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
        Date newDate = new Date(play, localDate);
        DAOFactory.getDAOFactory().getDateDAO()
                .add(newDate);
        return GSON.toJson(newDate, Date.class);
    }

    public static String addOrder(JsonObject jsonOrder) {
        JsonArray ticketsJson = jsonOrder.getAsJsonArray("tickets");
        List<JsonObject> orderListJson = new ArrayList<>();
        ticketsJson.forEach(ticket -> {
            JsonObject jsonObject = new JsonObject();
            JsonObject ticketJson = ticket.getAsJsonObject();

            jsonOrder.addProperty("row", ticketJson.get("row").getAsInt());
            jsonOrder.addProperty("seat", ticketJson.get("seat").getAsInt());
            jsonObject.add("user", ticketJson.get("user").getAsJsonObject());
            jsonObject.add("date", ticketJson.get("date").getAsJsonObject());

            orderListJson.add(jsonObject);
        });
        Set<Order> orders = orderListJson.stream()
                .map(obj -> GSON.fromJson(obj, Order.class))
                .collect(Collectors.toSet());
        DAOFactory.getDAOFactory().getOrderDAO()
                .addAll(orders);
        JsonObject resultJson = new JsonObject();
        resultJson.addProperty("status", "COMPLETED");
        return resultJson.toString();
    }
}
