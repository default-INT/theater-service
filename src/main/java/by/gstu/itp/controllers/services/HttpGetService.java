package by.gstu.itp.controllers.services;

import by.gstu.itp.models.data.dao.DAOFactory;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.util.stream.Collectors;

public final class HttpGetService {

    private static final Gson GSON = UtilFactory.getGSON();

    private HttpGetService() {}

    public static String getAllPlays() {
        return GSON.toJson(
                DAOFactory.getDAOFactory().getPlayDAO()
                        .readAll()
                        .collect(Collectors.toList())
        );
    }

    public static String getAllAuthors() {
        return GSON.toJson(
            DAOFactory.getDAOFactory().getAuthorDAO()
                    .readAll()
                    .collect(Collectors.toList())
        );
    }

    public static String getHallSchema() {

        return null;
    }

    public static String getAllTickets(int dateId) {
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
}
