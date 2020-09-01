package by.gstu.itp.models.data.dao.postgre.hibernate;

import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.UserDAO;

import java.util.Optional;
import java.util.stream.Stream;

class PostgresHibUserDAO implements UserDAO {
    @Override
    public Stream<User> readAll() {
        return HibernateSession.getSessionFactory()
                .openSession()
                .createQuery("FROM User ", User.class)
                .stream();
    }

    @Override
    public Optional<User> logIn(User user) {
        return Optional.of(
                HibernateSession.getSessionFactory()
                        .openSession()
                        .createQuery("FROM User ", User.class)
                        .getSingleResult()
        );
    }

    @Override
    public void add(User user) {
        HibernateSession.commitHibTransaction(user);
    }

    @Override
    public void update(User user) {
        HibernateSession.commitHibTransaction(user);
    }
}
