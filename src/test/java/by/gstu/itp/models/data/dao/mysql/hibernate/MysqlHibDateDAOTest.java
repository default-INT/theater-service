package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.data.dao.DAOFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import java.time.LocalDate;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class MysqlHibDateDAOTest {

    private static final Logger logger = LogManager.getLogger();
    private static final String DB = "MYSQL_HIB";

    @Test
    public void readAll() {
        var dates = DAOFactory.getDAOFactory(DB)
                .getDateDAO()
                .readAll()
                .collect(Collectors.toList());
        logger.debug(dates);
        assertNotNull(dates);
    }

    @Test
    public void readPlayFromDate() {
        var play = DAOFactory.getDAOFactory(DB)
                .getDateDAO()
                .readAll()
                .findFirst()
                .orElseThrow(NullPointerException::new)
                .getPlay();
        logger.debug(play);
        assertNotNull(play);
    }

    // @Test
    public void add() {
        Date date = new Date(
                DAOFactory.getDAOFactory(DB).getPlayDAO()
                        .readAll()
                        .findFirst()
                        .orElseThrow(NullPointerException::new),
                LocalDate.now()
        );
        date.setDate(LocalDate.now());
        DAOFactory.getDAOFactory(DB).getDateDAO()
                .add(date);
        assertTrue(true);
    }
}