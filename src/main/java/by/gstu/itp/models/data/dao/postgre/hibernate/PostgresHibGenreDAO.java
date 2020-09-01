package by.gstu.itp.models.data.dao.postgre.hibernate;

import by.gstu.itp.models.beans.Genre;
import by.gstu.itp.models.data.dao.GenreDAO;

import java.util.stream.Stream;

class PostgresHibGenreDAO implements GenreDAO {
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
        HibernateSession.commitHibTransaction(genre);
    }
}
