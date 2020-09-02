package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Author;
import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.beans.Genre;
import by.gstu.itp.models.beans.Play;
import by.gstu.itp.models.data.dao.DAOFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MysqlHibPlayDAOTest {

    private static final Logger logger = LogManager.getLogger();
    private static final String DB = "MYSQL_HIB";

    @Test
    public void readAll() {
        var plays = DAOFactory.getDAOFactory(DB).getPlayDAO()
                .readAll()
                .collect(Collectors.toList());
        logger.debug(plays);
        assertNotNull(plays);
    }

    @Test
    public void readAuthorFromPlay() {
        Author author = DAOFactory.getDAOFactory(DB).getPlayDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new)
                .getAuthor();
        logger.debug(author);
        assertNotNull(author);
    }

    @Test
    public void readGenreFromPlay() {
        Genre genre = DAOFactory.getDAOFactory(DB).getPlayDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new)
                .getGenre();
        logger.debug(genre);
        assertNotNull(genre);
    }

    @Test
    public void readDatesFromPlay() {
        var dates = DAOFactory.getDAOFactory(DB).getPlayDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new)
                .getDates();
        logger.debug(dates);
        assertNotNull(dates);
    }

    @Test
    public void add() {
        Genre genre = DAOFactory.getDAOFactory(DB)
                .getGenreDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new);
        Author author = DAOFactory.getDAOFactory(DB)
                .getAuthorDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new);
        Play play = new Play("Test play", author, genre);

        DAOFactory.getDAOFactory(DB).getPlayDAO().add(play);
        assertTrue(true);
    }
}