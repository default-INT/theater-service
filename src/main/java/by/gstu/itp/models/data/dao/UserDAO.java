package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.accounts.User;

import java.util.List;
import java.util.Optional;

public interface UserDAO {
    Optional<List<User>> readAll();
    Optional<User> logIn(User user);
    void add(User user);
    void update(User user);
}
