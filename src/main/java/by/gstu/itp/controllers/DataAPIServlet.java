package by.gstu.itp.controllers;

import by.gstu.itp.controllers.services.HttpGetService;
import by.gstu.itp.controllers.services.HttpPostService;
import by.gstu.itp.models.exceptions.*;
import com.google.gson.JsonObject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.function.Function;

@WebServlet(urlPatterns = "/data-api/*")
public class DataAPIServlet extends HttpServlet {

    private static final Logger logger = LogManager.getLogger();

    private enum UrlPathGet {
        PLAYS(HttpGetService::getAllPlays),
        AUTHORS(HttpGetService::getAllAuthors),
        ORDERED_TICKETS(HttpGetService::getAllTickets),
        AUTH(HttpGetService::getAuthUser),
        DATE(HttpGetService::getDate),
        HALL_INFO(HttpGetService::getHallInfo),
        HALL_SCHEMA(HttpGetService::getHallSchema);

        private final Function<HttpServletRequest, String> requestHandler;

        UrlPathGet(Function<HttpServletRequest, String> requestHandler) {
            this.requestHandler = requestHandler;
        }

        String getAnswer(HttpServletRequest request) {
            return requestHandler.apply(request);
        }
    }

    private enum UrlPathPost {
        LOGIN(HttpPostService::logIn),
        REG(HttpPostService::registration),
        DATE_ADD(HttpPostService::addDate),
        ADD_ORDER(HttpPostService::addOrder),
        LOGOUT(HttpPostService::logout);

        private final Function<HttpServletRequest, String> requestHandler;

        UrlPathPost(Function<HttpServletRequest, String> requestHandler) {
            this.requestHandler = requestHandler;
        }

        String getAnswer(HttpServletRequest request) {
            return requestHandler.apply(request);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String servletPath = request.getPathInfo()
                .replace("/", "")
                .replace("-", "_")
                .toUpperCase();

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Origin", "http://localhost:8081");
        try {
            UrlPathPost urlPathPost = UrlPathPost.valueOf(servletPath);

            response.getWriter().write(urlPathPost.getAnswer(request));
        } catch (LogInFailedException e) {
            JsonObject jsonError = new JsonObject();

            jsonError.addProperty("error", "Log in failed");
            jsonError.addProperty("detail", e.getMessage());

            logger.info(e);
            response.sendError(404, jsonError.toString());
        } catch (DateNotFoundException e) {
            JsonObject jsonError = new JsonObject();

            jsonError.addProperty("error", "Date not found");
            jsonError.addProperty("detail", e.getMessage());

            logger.info(e);
            response.sendError(404, jsonError.toString());
        } catch (PatternException e) {
            JsonObject jsonError = new JsonObject();

            jsonError.addProperty("error", "Incorrect data input");
            jsonError.addProperty("detail", e.getMessage());

            logger.info(e);
            response.sendError(406, jsonError.toString());
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String[] urlParts = request.getPathInfo().split("/");
        String servletPath = urlParts[1].replace("-", "_");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        try {
            UrlPathGet urlPath = UrlPathGet.valueOf(servletPath.toUpperCase());
            response.getWriter().write(urlPath.getAnswer(request));
        } catch (AccountAccessException e) {
            JsonObject jsonError = new JsonObject();

            jsonError.addProperty("error", "Log in or registration failed");
            jsonError.addProperty("detail", e.getMessage());

            logger.info(e);

            response.sendError(404, jsonError.toString());
        } catch (PlayExistException e) {
            JsonObject jsonError = new JsonObject();

            jsonError.addProperty("error", "Date exist in database");
            jsonError.addProperty("detail", e.getMessage());

            logger.info(e);
            response.sendError(404, jsonError.toString());
        } catch (PlayNotFoundException e) {
            JsonObject jsonError = new JsonObject();

            jsonError.addProperty("error", "Date not found in database");
            jsonError.addProperty("detail", e.getMessage());

            logger.info(e);
            response.sendError(404, jsonError.toString());
        }


    }
}
