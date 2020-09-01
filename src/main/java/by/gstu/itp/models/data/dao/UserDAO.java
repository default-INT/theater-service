package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.accounts.User;

import java.util.Optional;
import java.util.stream.Stream;

public interface UserDAO {
    Stream<User> readAll();
    Optional<User> logIn(User user);
    void add(User user);
    void update(User user);
}
