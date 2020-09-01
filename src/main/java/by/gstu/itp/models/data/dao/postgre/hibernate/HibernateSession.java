package by.gstu.itp.models.data.dao.postgre.hibernate;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.Objects;

class HibernateSession {
    private final static Logger logger = LogManager.getLogger();

    private final static SessionFactory sessionFactory = getInitSessionFactory();

    private HibernateSession() { }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    private static SessionFactory getInitSessionFactory() {
        try {
            return new Configuration().configure().buildSessionFactory();
        } catch (HibernateException ex) {
            logger.error(ex.getMessage());
            logger.trace(ex.getStackTrace(), ex);
            throw new ExceptionInInitializerError();
        }
    }

    public static void commitHibTransaction(Object object) {
        try (Session session = sessionFactory.openSession().getSession()) {
            session.beginTransaction();
            session.save(Objects.requireNonNull(object));
            session.getTransaction().commit();
        } catch (RuntimeException e) {
            logger.error(e);
        }
    }
}
