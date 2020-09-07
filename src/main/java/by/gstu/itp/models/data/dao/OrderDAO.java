package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Order;

import java.util.Collection;
import java.util.stream.Stream;

public interface OrderDAO {
    Stream<Order> readAll();
    Order read(int orderId);
    void completeOrder(int orderId);
    void add(Order order);
    void addAll(Collection<Order> order);
    void remove(Order order);
    void update(Order newOrder);
}
