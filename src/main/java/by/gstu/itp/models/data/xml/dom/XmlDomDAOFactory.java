package by.gstu.itp.models.data.xml.dom;

public class XmlDomDAOFactory {


    private static XmlDomDAOFactory instance;

    private XmlDomDAOFactory() {
    }

    public static XmlDomDAOFactory getInstance() {
        if (instance == null) {
            instance = new XmlDomDAOFactory();
        }
        return instance;
    }

    public HallTypeDOM getHallTypeDOM() {
        return new HallTypeDOM();
    }

}
