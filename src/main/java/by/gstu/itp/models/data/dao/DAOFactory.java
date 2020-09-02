package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.data.dao.mysql.hibernate.MysqlHibDAOFactory;
import by.gstu.itp.models.data.dao.xml.dom.XmlDomDAOFactory;

public abstract class DAOFactory {
    private enum Database {
        MYSQL_HIB, XML_DOM
    }

    public abstract AuthorDAO getAuthorDAO();
    public abstract DateDAO getDateDAO();
    public abstract GenreDAO getGenreDAO();
    public abstract PlayDAO getPlayDAO();
    public abstract UserDAO getUserDAO();
    public abstract OrderDAO getOrderDAO();

    private static DAOFactory getDAOFactory(Database db) {
        return switch (db) {
            case XML_DOM -> new XmlDomDAOFactory();
            case MYSQL_HIB -> new MysqlHibDAOFactory();
        };
    }

    public static DAOFactory getDAOFactory(String db) {
        return getDAOFactory(Database.valueOf(db));
    }

    public static DAOFactory getDAOFactory() {
        return getDAOFactory(Database.MYSQL_HIB);
    }
}
