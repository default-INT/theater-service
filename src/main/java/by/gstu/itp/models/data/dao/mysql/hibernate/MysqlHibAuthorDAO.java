package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Author;
import by.gstu.itp.models.data.dao.AuthorDAO;

import java.util.stream.Stream;

class MysqlHibAuthorDAO implements AuthorDAO {

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
