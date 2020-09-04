package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Order;
import by.gstu.itp.models.data.dao.OrderDAO;
import org.hibernate.Session;

import java.util.Collection;
import java.util.stream.Stream;

public class MysqlHibOrderDAO implements OrderDAO {
    @Override
    public Stream<Order> readAll() {
        return HibernateSession.getSessionFactory()
                .openSession()
                .createQuery("FROM Order", Order.class)
                .stream();
    }

    @Override
    public void add(Order order) {
        long countOrder = order.getDate()
                .getOrders()
                .stream()
                .filter(o -> o.equals(order))
                .count();
        if (countOrder > 0) {
            throw new IllegalArgumentException(); //TODO: new exception
        }
        HibernateSession.commitHibTransaction(order);
    }

    @Override
    public void addAll(Collection<Order> orders) {
        orders.forEach(this::add);
    }

    @Override
    public void remove(Order order) {
        try (Session session = HibernateSession.getSessionFactory().openSession()){
            session.beginTransaction();
            session.remove(order);
            session.getTransaction().commit();
        }
    }

    @Override
    public void update(Order newOrder) {
        try (Session session = HibernateSession.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.update(newOrder);
            session.getTransaction().commit();
        }
    }
}
