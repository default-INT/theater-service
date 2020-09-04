package by.gstu.itp.models.data.converters;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Play;
import com.google.gson.*;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateJsonConverter implements JsonDeserializer<Date>, JsonSerializer<Date> {
    private static final DateTimeFormatter JSON_DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    @Override
    public Date deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext)
            throws JsonParseException {
        JsonObject jsonDate = jsonElement.getAsJsonObject();

        if (jsonDate.get("id") == null) {
            jsonDate.addProperty("id", 0);
        }

        int id = jsonDate.get("id").getAsInt();
        LocalDate localDate = LocalDate.from(JSON_DATE_FORMATTER.parse(jsonDate.get("date").getAsString()));
        Play play = jsonDeserializationContext.deserialize(jsonDate.get("play"), Play.class);

        return new Date(id, play, localDate);
    }

    @Override
    public JsonElement serialize(Date date, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject jsonDate = new JsonObject();

        jsonDate.addProperty("id", date.getId());
        jsonDate.addProperty("date", JSON_DATE_FORMATTER.format(date.getDate()));
        jsonDate.add("play", jsonSerializationContext.serialize(date.getPlay(), Play.class));

        return jsonDate;
    }
}
