package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.Author;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

import java.lang.reflect.Type;

public class AuthorJsonConverter implements JsonSerializer<Author> {
    @Override
    public JsonElement serialize(Author author, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject jsonAuthor = new JsonObject();

        jsonAuthor.addProperty("id", author.getId());
        jsonAuthor.addProperty("name", author.getName());

        return jsonAuthor;
    }
}
