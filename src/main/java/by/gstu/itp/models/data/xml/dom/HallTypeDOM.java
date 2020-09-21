package by.gstu.itp.models.data.xml.dom;

import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;

public class HallTypeDOM {
    private static final String DOCUMENT_PATH = "hall-type.xml";
    private static final String TICKET_CATEGORIES_TAG = "category";
    private static final String ROW_TAG = "row";

    private static final String ROW_START_ATTRIBUTE = "rowStart";
    private static final String ROW_END_ATTRIBUTE = "rowEnd";

    private final Document document;

    HallTypeDOM() {
        this.document = getDocument();
    }

    private Document getDocument() {
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            InputStream inputStream = getClass()
                    .getClassLoader().getResourceAsStream(DOCUMENT_PATH);
            return builder.parse(inputStream);
        } catch (Exception e) {
            throw new IllegalArgumentException();
        }
    }

    public int getCheapRowStart() {
        NodeList nodeList = document.getElementsByTagName(TICKET_CATEGORIES_TAG);
        return Integer.parseInt(nodeList.item(0).getAttributes()
                .getNamedItem(ROW_START_ATTRIBUTE)
                .getNodeValue());
    }
    public int getCheapRowEnd() {
        NodeList nodeList = document.getElementsByTagName(TICKET_CATEGORIES_TAG);
        return Integer.parseInt(nodeList.item(0).getAttributes()
                .getNamedItem(ROW_END_ATTRIBUTE)
                .getNodeValue());
    }
    public int getExpensiveRowStart() {
        NodeList nodeList = document.getElementsByTagName(TICKET_CATEGORIES_TAG);
        return Integer.parseInt(nodeList.item(2).getAttributes()
                .getNamedItem(ROW_START_ATTRIBUTE)
                .getNodeValue());
    }
    public int getExpensiveRowEnd() {
        NodeList nodeList = document.getElementsByTagName(TICKET_CATEGORIES_TAG);
        return Integer.parseInt(nodeList.item(2).getAttributes()
                .getNamedItem(ROW_END_ATTRIBUTE)
                .getNodeValue());
    }

    public Collection<Integer> getRowSeats() {
        NodeList nodeList = document.getElementsByTagName(ROW_TAG);
        Collection<Integer> seats = new ArrayList<>();
        for (int i = 0; i < nodeList.getLength(); i++) {
            NamedNodeMap attributes = nodeList.item(i)
                    .getAttributes();
            seats.add(
                    Integer.parseInt(attributes
                            .getNamedItem("seats")
                            .getNodeValue())
            );
        }
        return seats;
    }
}
