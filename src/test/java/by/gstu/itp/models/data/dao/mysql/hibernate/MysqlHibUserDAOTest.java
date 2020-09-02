package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.DAOFactory;
import by.gstu.itp.models.exceptions.LogInFailedException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MysqlHibUserDAOTest {

    private static final Logger logger = LogManager.getLogger();
    private static final String DB = "MYSQL_HIB";

    @Test
    public void readAll() {
        var users = DAOFactory.getDAOFactory(DB).getUserDAO()
                .readAll()
                .collect(Collectors.toList());
        logger.debug(users);
        assertNotNull(users);
    }

    @Test
    public void logIn() {
        User logInUser = new User("solodkov@gmail.com", "1806");
        User user = DAOFactory.getDAOFactory(DB)
                .getUserDAO()
                .logIn(logInUser)
                .orElseThrow(() -> new LogInFailedException(logInUser));
        logger.debug(user);
        assertEquals(user.getClass(), User.class);
    }

    @Test
    public void add() {
        User newUser = new User("Test mail", "1806", "testmail@gmail.com",
                "+375(29)971-54-23");
        DAOFactory.getDAOFactory(DB).getUserDAO().add(newUser);
        assertTrue(true);
    }

    @Test
    public void update() {
        User logInUser = new User("solodkov@gmail.com", "1806");
        User user = DAOFactory.getDAOFactory(DB)
                .getUserDAO()
                .logIn(logInUser)
                .orElseThrow(() -> new LogInFailedException(logInUser));
        assertEquals(user.getName(), "Solodkov M.A.");
        user.setName("Solodkov");
        DAOFactory.getDAOFactory(DB).getUserDAO().update(user);
        assertEquals(user.getName(), "Solodkov");
    }
}