package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.data.dao.DAOFactory;
import org.hibernate.boot.model.relational.Database;
import org.junit.Test;

import static org.junit.Assert.*;

public class MysqlHibDAOFactoryTest {

    private static final String db = "POSTGRES_HIB";

    @Test
    public void getAuthorDAO() {
        assertNotNull(DAOFactory.getDAOFactory(db).getAuthorDAO());
    }

    @Test
    public void getDateDAO() {
        assertNotNull(DAOFactory.getDAOFactory(db).getDateDAO());
    }

    @Test
    public void getGenreDAO() {
        assertNotNull(DAOFactory.getDAOFactory(db).getGenreDAO());
    }

    @Test
    public void getPlayDAO() {
        assertNotNull(DAOFactory.getDAOFactory(db).getPlayDAO());
    }

    @Test
    public void getUserDAO() {
        assertNotNull(DAOFactory.getDAOFactory(db).getUserDAO());
    }
}