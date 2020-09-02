package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Author;
import by.gstu.itp.models.data.dao.DAOFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import java.util.stream.Collectors;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class MysqlHibAuthorDAOTest {

    private static final Logger logger = LogManager.getLogger();
    private static final String DB = "MYSQL_HIB";

    @Test
    public void readAll() {
        var authors = DAOFactory.getDAOFactory(DB).getAuthorDAO()
                .readAll()
                .collect(Collectors.toList());
        logger.debug(authors);
        assertNotNull(authors);
    }

    @Test
    public void readPlaysFromAuthor() {
        var plays = DAOFactory.getDAOFactory(DB).getAuthorDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new)
                .getPlays();
        logger.debug(plays);
        assertNotNull(plays);
    }

    @Test
    public void addTestAuthor() {
        Author author = new Author("A. Pushkin");
        DAOFactory.getDAOFactory(DB).getAuthorDAO()
                .add(author);
        assertTrue(true);
    }
}