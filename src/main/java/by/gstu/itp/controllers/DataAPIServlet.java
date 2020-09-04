package by.gstu.itp.controllers;

import by.gstu.itp.controllers.services.HttpGetService;
import by.gstu.itp.controllers.services.HttpPostService;
import by.gstu.itp.controllers.services.UtilFactory;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.function.Function;
import java.util.function.Supplier;

@WebServlet(urlPatterns = "/data-api/*")
public class DataAPIServlet extends HttpServlet {

    private enum UrlPathGetToArg {
        ORDERED_TICKETS(HttpGetService::getAllTickets);

        private final Function<Integer, String> func;

        UrlPathGetToArg(Function<Integer, String> func) {
            this.func = func;
        }

        String getAnswer(int id) {
            return func.apply(id);
        }
    }

    private enum UrlPathGet {
        PLAYS(HttpGetService::getAllPlays),
        AUTHORS(HttpGetService::getAllAuthors);

        private final Supplier<String> dataGetter;

        UrlPathGet(Supplier<String> supplier) {
            dataGetter = supplier;
        }


        String getAnswer() {
            return dataGetter.get();
        }
    }

    private enum UrlPathPost {
        LOGIN(HttpPostService::logIn),
        REG(HttpPostService::registration),
        DATE_ADD(HttpPostService::addDate),
        ADD_ORDER(HttpPostService::addOrder);

        private final Function<JsonObject, String> resultFunc;

        UrlPathPost(Function<JsonObject, String> resultFunc) {
            this.resultFunc = resultFunc;
        }

        String getAnswer(JsonObject reqObj) {
            return resultFunc.apply(reqObj);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String servletPath = request.getPathInfo()
                .replace("/", "")
                .replace("-", "_")
                .toUpperCase();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        UrlPathPost urlPathPost = UrlPathPost.valueOf(servletPath);
        JsonObject reqJsonObject = UtilFactory.convertHttpRequestToJsonObject(request);
        response.getWriter().write(urlPathPost.getAnswer(
                reqJsonObject
        ));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String[] urlParts = request.getPathInfo().split("/");
        String servletPath = urlParts[1].replace("-", "_");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        if (urlParts.length < 3) {
            UrlPathGet urlPath = UrlPathGet.valueOf(servletPath.toUpperCase());
            response.getWriter().write(urlPath.getAnswer());
        } else {
            UrlPathGetToArg urlPath = UrlPathGetToArg.valueOf(servletPath.toUpperCase());
            response.getWriter().write(urlPath.getAnswer(Integer.parseInt(urlParts[2])));
        }

    }
}
