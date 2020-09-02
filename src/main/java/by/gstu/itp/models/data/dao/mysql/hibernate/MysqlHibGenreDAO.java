package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Genre;
import by.gstu.itp.models.data.dao.GenreDAO;
import org.hibernate.Session;

import java.util.stream.Stream;

class MysqlHibGenreDAO implements GenreDAO {
    @Override
    public Stream<Genre> readAll() {
        return HibernateSession.getSessionFactory()
                .openSession()
                .createQuery("FROM Genre ", Genre.class)
                .stream();
    }

    @Override
    public void add(Genre genre) {
        HibernateSession.commitHibTransaction(genre);
    }

    @Override
    public void update(Genre genre) {
        try (Session session = HibernateSession.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.update(genre);
            session.getTransaction().commit();
        }
    }
}
