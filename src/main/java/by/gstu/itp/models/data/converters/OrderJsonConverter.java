package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.beans.accounts.User;
import com.google.gson.*;

import java.lang.reflect.Type;

public class OrderJsonConverter implements JsonDeserializer<Order> {
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
}
