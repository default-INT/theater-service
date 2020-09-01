package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Author;

import java.util.stream.Stream;

public interface AuthorDAO {
    Stream<Author> readAll();
    void add(Author author);
    void update(Author author);
}
