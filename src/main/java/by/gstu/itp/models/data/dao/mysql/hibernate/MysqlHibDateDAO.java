package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.data.dao.DateDAO;

import java.util.stream.Stream;

public class MysqlHibDateDAO implements DateDAO {
    @Override
    public Stream<Date> readAll() {
        return HibernateSession.getSessionFactory()
                .openSession()
                .createQuery("FROM Date ", Date.class)
                .stream();
    }

    @Override
    public void add(Date date) {
        HibernateSession.commitHibTransaction(date);
    }

    @Override
    public void update(Date date) {
        HibernateSession.commitHibTransaction(date);
    }
}
