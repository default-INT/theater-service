package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.Author;
import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Genre;
import by.gstu.itp.models.beans.Play;
import com.google.gson.*;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Set;
import java.util.stream.Collectors;

public class PlayJsonConverter implements JsonSerializer<Play>, JsonDeserializer<Play> {

    private static final DateTimeFormatter JSON_DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    @Override
    public JsonElement serialize(Play play, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject jsonArgsPlay = new JsonObject();

        jsonArgsPlay.addProperty("id", play.getId());
        jsonArgsPlay.addProperty("name", play.getName());
        jsonArgsPlay.addProperty("author", play.getAuthor().getName());
        jsonArgsPlay.addProperty("genre", play.getGenre().getName());

        Set<JsonObject> dates =  play.getDates().stream()
                .filter(date -> date.getDate().isAfter(LocalDate.now()))
                .map(date -> {
                    JsonObject jsonDate = new JsonObject();

                    jsonDate.addProperty("id", date.getId());
                    jsonDate.addProperty("date", date.getDate().format(JSON_DATE_FORMATTER));

                    return jsonDate;
                }).collect(Collectors.toSet());

        jsonArgsPlay.add("dates", jsonSerializationContext.serialize(dates));

        return jsonArgsPlay;
    }

    @Override
    public Play deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext)
            throws JsonParseException {
        JsonObject jsonPlay = jsonElement.getAsJsonObject();

        if (jsonPlay.get("id") == null) {
            jsonPlay.addProperty("id", 0);
        }

        int id = jsonPlay.get("id").getAsInt();
        String name = jsonPlay.get("name").getAsString();
        Author author = jsonDeserializationContext.deserialize(jsonPlay.get("author"), Author.class);
        Genre genre = jsonDeserializationContext.deserialize(jsonPlay.get("genre"), Genre.class);

        return new Play(id, name, author, genre);
    }
}
