package by.gstu.itp.controllers.services;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.DAOFactory;
import by.gstu.itp.models.exceptions.DateNotFoundException;
import com.google.gson.Gson;
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

        return null;
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
}
