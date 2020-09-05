package by.gstu.itp.controllers.services;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.beans.Play;
import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.DAOFactory;
import by.gstu.itp.models.data.dao.UserDAO;
import by.gstu.itp.models.exceptions.*;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public final class HttpPostService {
    private static final DateTimeFormatter JSON_DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private static final Gson GSON = UtilFactory.getGSON();

    private HttpPostService() {}

    public static String logIn(HttpServletRequest request) {
        JsonObject jsonObject = UtilFactory.convertHttpRequestToJsonObject(request);
        HttpSession session = request.getSession();

        String email = jsonObject.get("email").getAsString();
        String password = jsonObject.get("password").getAsString();
        User user = new User(email, password);
        Optional<User> loginUser = DAOFactory.getDAOFactory().getUserDAO()
                .logIn(user);
        if (loginUser.isEmpty()) {
            throw new LogInFailedException(loginUser.orElse(null));
        }
        User authUser = loginUser.orElseThrow(NullPointerException::new);
        session.setAttribute("authUser", authUser);
        return GSON.toJson(authUser, User.class);
    }

    public static String registration(HttpServletRequest request) {
        JsonObject jsonObject = UtilFactory.convertHttpRequestToJsonObject(request);
        HttpSession session = request.getSession();

        User newUser = GSON.fromJson(jsonObject, User.class);
        UserDAO userDAO = DAOFactory.getDAOFactory().getUserDAO();
        userDAO.add(newUser);
        if (newUser.getId() == 0) {
            throw new RegistrationFailedException(newUser);
        }
        session.setAttribute("authUser", newUser);
        return GSON.toJson(newUser, User.class);
    }

    public static String addDate(HttpServletRequest request) {
        JsonObject jsonObject = UtilFactory.convertHttpRequestToJsonObject(request);

        LocalDate localDate = LocalDate.from(JSON_DATE_FORMATTER.parse(jsonObject.get("date").getAsString()));
        int playId = jsonObject.get("playId").getAsInt();
        boolean check = DAOFactory.getDAOFactory().getDateDAO()
                .readAll()
                .allMatch(date -> date.getDate().equals(localDate) && date.getPlayId() == playId);
        if (check) {
            throw new PlayExistException(localDate, playId);
        }
        Play play = DAOFactory.getDAOFactory().getPlayDAO()
                .readAll()
                .filter(p -> p.getId() == playId)
                .findFirst()
                .orElseThrow(() -> new PlayNotFoundException("Play with id = " + playId + " not found"));
        Date newDate = new Date(play, localDate);
        DAOFactory.getDAOFactory().getDateDAO()
                .add(newDate);
        return GSON.toJson(newDate, Date.class);
    }

    public static String addOrder(HttpServletRequest request) {

        JsonArray ordersJson = UtilFactory.convertHttpRequestToJsonArray(request);
        List<Order> orders = new ArrayList<>();
        ordersJson.forEach(order -> {
            JsonObject jsonObject = order.getAsJsonObject();

            int row = jsonObject.get("row").getAsInt();
            int seat = jsonObject.get("seat").getAsInt();
            User user = (User) request.getSession().getAttribute("authUser");
            int dateId = jsonObject.get("dateId").getAsInt();
            Date orderDate = DAOFactory.getDAOFactory().getDateDAO()
                    .readAll()
                    .filter(date -> date.getId() == dateId)
                    .findFirst()
                    .orElseThrow(DateNotFoundException::new);

            orders.add(new Order(row, seat, user, orderDate));
        });

        DAOFactory.getDAOFactory().getOrderDAO()
                .addAll(orders);

        JsonObject resultJson = new JsonObject();
        resultJson.addProperty("status", "COMPLETED");

        return resultJson.toString();
    }

    public static String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.removeAttribute("authUser");
        JsonObject jsonAnswer = new JsonObject();
        jsonAnswer.addProperty("status", "LOGOUT");
        return jsonAnswer.toString();
    }
}
