package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.accounts.Admin;
import by.gstu.itp.models.beans.accounts.Courier;
import by.gstu.itp.models.beans.accounts.Manager;
import by.gstu.itp.models.beans.accounts.User;
import com.google.gson.*;

import java.lang.reflect.Type;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Supplier;

public class UserJsonConverter implements JsonSerializer<User>, JsonDeserializer<User> {
    private enum UserConverter {
        USER(User::new),
        ADMIN(Admin::new),
        COURIER(Courier::new),
        MANAGER(Manager::new);
        private final Function<JsonObject, User> accountFunc;

        UserConverter(Function<JsonObject, User> accountFunc) {
            this.accountFunc= accountFunc;
        }

        User getUser(JsonObject jsonObject) {
            return accountFunc.apply(jsonObject);
        }
    }

    @Override
    public User deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext)
            throws JsonParseException {
        JsonObject jsonUser = jsonElement.getAsJsonObject();

        String roleClass = jsonUser.get("role").getAsString().toUpperCase();

        if (jsonUser.get("id") == null) {
            jsonUser.addProperty("id", 0);
        }

        return UserConverter.valueOf(roleClass).getUser(jsonUser);
    }

    @Override
    public JsonElement serialize(User user, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject jsonUser = new JsonObject();

        jsonUser.addProperty("id", user.getId());
        jsonUser.addProperty("role", user.getClass().getSimpleName());
        jsonUser.addProperty("name", user.getName());
        jsonUser.addProperty("email", user.getEmail());
        jsonUser.addProperty("phone", user.getPhone());

        return jsonUser;
    }
}
