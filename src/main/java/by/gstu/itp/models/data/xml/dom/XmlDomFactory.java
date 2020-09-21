package by.gstu.itp.models.data.xml.dom;

public class XmlDomFactory {


    private static XmlDomFactory instance;

    private XmlDomFactory() {
    }

    public static XmlDomFactory getInstance() {
        if (instance == null) {
            instance = new XmlDomFactory();
        }
        return instance;
    }

    public HallTypeDOM getHallTypeDOM() {
        return new HallTypeDOM();
    }

}
