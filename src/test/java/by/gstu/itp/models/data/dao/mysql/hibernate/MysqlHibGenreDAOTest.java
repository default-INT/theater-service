package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Genre;
import by.gstu.itp.models.data.dao.DAOFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MysqlHibGenreDAOTest {

    private static final Logger logger = LogManager.getLogger();
    private static final String DB = "MYSQL_HIB";

    @Test
    public void readAll() {
        var genres = DAOFactory.getDAOFactory(DB)
                .getGenreDAO()
                .readAll()
                .collect(Collectors.toList());
        logger.debug(genres);
        assertNotNull(genres);
    }

    @Test
    public void readPlaysFromGenre() {
        var plays = DAOFactory.getDAOFactory(DB)
                .getGenreDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new)
                .getPlays();
        logger.debug(plays);
        assertNotNull(plays);
    }

    @Test
    public void add() {
        Genre genre = new Genre("Test genre");
        DAOFactory.getDAOFactory(DB).getGenreDAO().add(genre);
        assertTrue(true);
    }
}