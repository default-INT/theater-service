package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.data.dao.postgre.hibernate.PostgresHibDAOFactory;
import by.gstu.itp.models.data.dao.xml.dom.XmlDomDAOFactory;

public abstract class DAOFactory {
    private enum Database {
        POSTGRES_HIB, XML_DOM
    }

    public abstract AuthorDAO getAuthorDAO();
    public abstract DateDAO getDateDAO();
    public abstract GenreDAO getGenreDAO();
    public abstract PlayDAO getPlayDAO();
    public abstract UserDAO getUserDAO();

    public static DAOFactory getDAOFactory(Database db) {
        return switch (db) {
            case XML_DOM -> new XmlDomDAOFactory();
            case POSTGRES_HIB -> new PostgresHibDAOFactory();
        };
    }

    public static DAOFactory getDAOFactory() {
        return getDAOFactory(Database.POSTGRES_HIB);
    }
}
