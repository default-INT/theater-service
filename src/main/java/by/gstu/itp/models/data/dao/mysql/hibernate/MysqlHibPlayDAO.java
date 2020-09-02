package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Play;
import by.gstu.itp.models.data.dao.PlayDAO;
import org.hibernate.Session;

import java.util.stream.Stream;

class MysqlHibPlayDAO implements PlayDAO {
    @Override
    public Stream<Play> readAll() {
        return HibernateSession.getSessionFactory()
                .openSession()
                .createQuery("FROM Play ", Play.class)
                .stream();
    }

    @Override
    public void add(Play play) {
        HibernateSession.commitHibTransaction(play);
    }

    @Override
    public void update(Play play) {
        try (Session session = HibernateSession.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.update(play);
            session.getTransaction().commit();
        }
    }
}
