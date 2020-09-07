package by.gstu.itp.controllers.services;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Hall;
import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.beans.accounts.Admin;
import by.gstu.itp.models.beans.accounts.Courier;
import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.DAOFactory;
import by.gstu.itp.models.exceptions.AccountAccessException;
import by.gstu.itp.models.exceptions.DateNotFoundException;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Optional;
import java.util.stream.Collectors;

public final class HttpGetService {

    private static final Gson GSON = UtilFactory.getGSON();

    private HttpGetService() {}

    public static String getAuthUser(HttpServletRequest request) {
        HttpSession session = request.getSession();
        if (session.getAttribute("authUser") != null) {
            return GSON.toJson(session.getAttribute("authUser"), User.class);
        }
        JsonObject answerJson = new JsonObject();

        answerJson.addProperty("status", "User not auth");
        return answerJson.toString();
    }

    public static String getAllPlays(HttpServletRequest request) {
        return GSON.toJson(
                DAOFactory.getDAOFactory().getPlayDAO()
                        .readAll()
                        .collect(Collectors.toList())
        );
    }

    public static String getAllAuthors(HttpServletRequest request) {
        return GSON.toJson(
            DAOFactory.getDAOFactory().getAuthorDAO()
                    .readAll()
                    .collect(Collectors.toList())
        );
    }

    public static String getHallSchema(HttpServletRequest request) {
        return Hall.getHallSchema().toString();
    }

    public static String getHallInfo(HttpServletRequest request) {
        JsonObject jsonObject = new JsonObject();

        jsonObject.add("hallSchema", GSON.fromJson(getHallSchema(request), JsonArray.class));
        jsonObject.add("allTickets", GSON.fromJson(getAllTickets(request), JsonArray.class));

        return jsonObject.toString();
    }

    public static String getAllTickets(HttpServletRequest request) {
        String[] urlParts = request.getPathInfo().split("/");
        int dateId = Integer.parseInt(urlParts[2]);
        var tickets = DAOFactory.getDAOFactory().getOrderDAO()
                .readAll()
                .filter(order -> order.getDateId() == dateId)
                .map(order -> {
                    JsonObject ticketJson = new JsonObject();

                    ticketJson.addProperty("row", order.getRow());
                    ticketJson.addProperty("seat", order.getSeat());

                    return ticketJson;
                }).collect(Collectors.toSet());
        return GSON.toJson(tickets);
    }

    public static String getDate(HttpServletRequest request) {
        String[] urlParts = request.getPathInfo().split("/");
        int dateId = Integer.parseInt(urlParts[2]);
        Optional<Date> date = DAOFactory.getDAOFactory().getDateDAO()
                .readAll()
                .filter(d -> d.getId() == dateId)
                .findFirst();

        return GSON.toJson(date.orElseThrow(() -> new DateNotFoundException("Date with id = " + dateId + " not found")),
                Date.class);
    }

    public static String getUserFullData(HttpServletRequest request) throws NullPointerException, ClassCastException {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("authUser");
        String answer;
        if (user.getClass() == User.class) {
            JsonObject jsonUser = GSON.toJsonTree(user, User.class).getAsJsonObject();
            var orders = DAOFactory.getDAOFactory().getOrderDAO()
                    .readAll()
                    .filter(order -> order.getUserId() == user.getId())
                    .collect(Collectors.toSet());
            JsonArray jsonOrders = GSON.toJsonTree(orders).getAsJsonArray();
            jsonUser.add("orders", jsonOrders);
            answer = jsonUser.toString();
        } else if (user.getClass() == Courier.class) {
            JsonObject jsonCourier = GSON.toJsonTree(user, User.class).getAsJsonObject();
            var orders = DAOFactory.getDAOFactory().getOrderDAO()
                    .readAll()
                    .filter(order -> !order.isCompleted())
                    .collect(Collectors.toSet());
            JsonArray jsonOrders = GSON.toJsonTree(orders).getAsJsonArray();
            jsonCourier.add("orders", jsonOrders);
            answer = jsonCourier.toString();
        } else if (user.getClass() == Admin.class) {
            JsonObject jsonAdmin = GSON.toJsonTree(user, User.class).getAsJsonObject();
            var users = DAOFactory.getDAOFactory().getUserDAO()
                    .readAll()
                    .filter(u -> u.getClass() != Admin.class)
                    .collect(Collectors.toSet());
            JsonArray jsonUsers = GSON.toJsonTree(users).getAsJsonArray();
            jsonAdmin.add("users", jsonUsers);
            answer = jsonAdmin.toString();
        } else {
            throw new AccountAccessException(user);
        }
        return answer;
    }
}
