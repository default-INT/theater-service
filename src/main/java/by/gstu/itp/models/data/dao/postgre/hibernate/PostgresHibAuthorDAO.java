package by.gstu.itp.models.data.dao.postgre.hibernate;

import by.gstu.itp.models.beans.Author;
import by.gstu.itp.models.data.dao.AuthorDAO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.stream.Stream;

class PostgresHibAuthorDAO implements AuthorDAO {
    private final static Logger logger = LogManager.getLogger();

    @Override
    public Stream<Author> readAll() {
        return HibernateSession.getSessionFactory().openSession().createQuery("FROM Author ", Author.class)
                .stream();
    }

    @Override
    public void add(Author author) {
        HibernateSession.commitHibTransaction(author);
    }

    @Override
    public void update(Author author) {
        HibernateSession.commitHibTransaction(author);
    }
}
