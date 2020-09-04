package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.DAOFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import java.sql.SQLException;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MysqlHibOrderDAOTest {

    private static final Logger logger = LogManager.getLogger();
    private static final String DB = "MYSQL_HIB";

    private static final User DEFAULT_USER = getDefaultUser();
    private static final Date DEFAULT_DATE = getDefaultDate();

    private static User getDefaultUser() {
        return DAOFactory.getDAOFactory(DB).getUserDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new);
    }

    private static Date getDefaultDate() {
        return DAOFactory.getDAOFactory(DB).getDateDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new);
    }

    @Test
    public void readAll() {
        var orders = DAOFactory.getDAOFactory(DB).getOrderDAO()
                .readAll()
                .collect(Collectors.toList());
        logger.debug(orders);
        assertNotNull(orders);
    }

    // @Test
    public void add() {
        Order order = new Order(15, 15, DEFAULT_USER, DEFAULT_DATE);
        DAOFactory.getDAOFactory(DB).getOrderDAO().add(order);
        assertTrue(true);
    }

    // @Test
    public void addSQLException() {
        assertThrows(IllegalArgumentException.class, () -> {
            Order order = new Order(15, 15, DEFAULT_USER, DEFAULT_DATE);
            DAOFactory.getDAOFactory(DB).getOrderDAO().add(order);
        });
    }

    // @Test
    public void remove() {
        Order order = new Order(15, 15, DEFAULT_USER, DEFAULT_DATE);
        var removeOrder = DAOFactory.getDAOFactory(DB).getOrderDAO()
                .readAll()
                .filter(o -> o.equals(order))
                .findFirst()
                .orElseThrow(NullPointerException::new);
        DAOFactory.getDAOFactory(DB).getOrderDAO()
                .remove(removeOrder);
        assertTrue(true);
    }
}