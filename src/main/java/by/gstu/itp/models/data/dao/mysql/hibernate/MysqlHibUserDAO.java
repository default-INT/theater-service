package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.accounts.User;
import by.gstu.itp.models.data.dao.UserDAO;
import org.hibernate.Session;

import java.util.Optional;
import java.util.stream.Stream;

public class MysqlHibUserDAO implements UserDAO {
    @Override
    public Stream<User> readAll() {
        return HibernateSession.getSessionFactory().openSession()
                .createQuery("FROM User ", User.class)
                .stream();
    }

    @Override
    public Optional<User> logIn(User user) {
        var query = HibernateSession.getSessionFactory().openSession()
                .createQuery("FROM User WHERE email = :paramEmail AND password = :paramPassword", User.class);

        query.setParameter("paramEmail", user.getEmail());
        query.setParameter("paramPassword", user.getPassword());

        return query.stream().findFirst();
    }

    @Override
    public void add(User user) {
        HibernateSession.commitHibTransaction(user);
    }

    @Override
    public void update(User newUser) {
        try (Session session = HibernateSession.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.update(newUser);
            session.getTransaction().commit();
        }
    }
}
