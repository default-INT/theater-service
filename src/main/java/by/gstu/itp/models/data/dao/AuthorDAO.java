package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorDAO {
    List<Optional<Author>> readAll();
    void add(Author author);
    void update(Author author);
}
