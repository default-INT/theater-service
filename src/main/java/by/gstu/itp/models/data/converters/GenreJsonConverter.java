package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.Genre;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

import java.lang.reflect.Type;

public class GenreJsonConverter implements JsonSerializer<Genre> {
    @Override
    public JsonElement serialize(Genre genre, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject jsonGenre = new JsonObject();

        jsonGenre.addProperty("id", genre.getId());
        jsonGenre.addProperty("name", genre.getName());

        return jsonGenre;
    }
}
