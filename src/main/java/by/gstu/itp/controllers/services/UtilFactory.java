package by.gstu.itp.controllers.services;

import by.gstu.itp.models.beans.Author;
import by.gstu.itp.models.beans.Genre;
import by.gstu.itp.models.beans.Play;
import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.converters.AuthorJsonConverter;
import by.gstu.itp.models.data.converters.GenreJsonConverter;
import by.gstu.itp.models.data.converters.PlayJsonConverter;
import by.gstu.itp.models.data.converters.UserJsonConverter;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;

public final class UtilFactory {
    private static final Gson GSON = new GsonBuilder()
            .registerTypeAdapter(User.class, new UserJsonConverter())
            .registerTypeAdapter(Author.class, new AuthorJsonConverter())
            .registerTypeAdapter(Genre.class, new GenreJsonConverter())
            .registerTypeAdapter(Play.class, new PlayJsonConverter())
            .create();

    private UtilFactory() {}

    public static Gson getGSON() {
        return GSON;
    }

    public static String convertHttpRequestToString(HttpServletRequest request) {
        try (BufferedReader reader = request.getReader()) {
            StringBuilder stringBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line);
            }
            return stringBuilder.toString();
        } catch (IOException e) {
            throw new JsonSyntaxException(request.toString());
        }
    }

    public static JsonObject convertHttpRequestToJsonObject(HttpServletRequest request) {
        return GSON.fromJson(convertHttpRequestToString(request), JsonObject.class);
    }
}
