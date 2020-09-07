package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.beans.accounts.User;
import com.google.gson.*;

import java.lang.reflect.Type;

public class OrderJsonConverter implements JsonDeserializer<Order>, JsonSerializer<Order> {
    @Override
    public Order deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext)
            throws JsonParseException {
        JsonObject jsonOrder = jsonElement.getAsJsonObject();

        if (jsonOrder.get("id") == null) {
            jsonOrder.addProperty("id", 0);
        }

        int id = jsonOrder.get("id").getAsInt();
        int row = jsonOrder.get("row").getAsInt();
        int seat = jsonOrder.get("seat").getAsInt();
        User user = jsonDeserializationContext.deserialize(jsonOrder.get("user"), User.class);
        Date date = jsonDeserializationContext.deserialize(jsonOrder.get("date"), Date.class);

        return new Order(id, row, seat, user, date);
    }

    @Override
    public JsonElement serialize(Order order, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject jsonObject = new JsonObject();

        jsonObject.addProperty("id", order.getId());
        jsonObject.addProperty("row", order.getRow());
        jsonObject.addProperty("seat", order.getSeat());
        jsonObject.addProperty("price", order.getPrice());
        jsonObject.addProperty("completed", order.isCompleted());
        jsonObject.add("user", jsonSerializationContext.serialize(order.getUser(), User.class));
        jsonObject.add("date", jsonSerializationContext.serialize(order.getDate(), Date.class));

        return jsonObject;
    }
}
