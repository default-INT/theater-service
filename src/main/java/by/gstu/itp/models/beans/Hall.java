package by.gstu.itp.models.beans;

import by.gstu.itp.models.data.xml.dom.HallTypeDOM;
import by.gstu.itp.models.data.xml.dom.XmlDomDAOFactory;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class Hall {
    private final int cheapRowStart;
    private final int cheapRowEnd;
    private final int expensiveRowStart;
    private final int expensiveRowEnd;

    private static JsonArray hallSchema;

    public static JsonArray getHallSchema() {
        if (hallSchema != null) {
            return hallSchema;
        }
        hallSchema = new JsonArray();
        XmlDomDAOFactory.getInstance().getHallTypeDOM()
                .getRowSeats()
                .forEach(seat -> {
                    JsonObject jsonObject = new JsonObject();
                    jsonObject.addProperty("seats", seat);
                    hallSchema.add(jsonObject);
                });
        return hallSchema;
    }


    private static Hall instance;

    private Hall() {
        HallTypeDOM factory = XmlDomDAOFactory.getInstance().getHallTypeDOM();
        cheapRowStart = factory.getCheapRowStart();
        cheapRowEnd = factory.getCheapRowEnd();
        expensiveRowStart = factory.getExpensiveRowStart();
        expensiveRowEnd = factory.getExpensiveRowEnd();
    }

    public static Hall getInstance() {
        if (instance == null) {
            instance = new Hall();
        }
        return instance;
    }

    public String getTicketType(int row) {
        if (row >= cheapRowStart && row <= cheapRowEnd) {
            return "CHEAP_TICKET";
        } else if (row >= expensiveRowStart && row <= expensiveRowEnd) {
            return "EXPENSIVE_TICKET";
        } else {
            return "DEFAULT_TICKET";
        }
    }

    public int getCheapRowStart() {
        return cheapRowStart;
    }

    public int getCheapRowEnd() {
        return cheapRowEnd;
    }

    public int getExpensiveRowStart() {
        return expensiveRowStart;
    }

    public int getExpensiveRowEnd() {
        return expensiveRowEnd;
    }
}
