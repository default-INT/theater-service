package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Date;
import by.gstu.itp.models.data.dao.DateDAO;
import org.hibernate.Session;

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
        try (Session session = HibernateSession.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.update(date);
            session.getTransaction().commit();
        }
    }
}
