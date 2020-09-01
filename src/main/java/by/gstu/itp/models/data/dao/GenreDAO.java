package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Genre;

import java.util.stream.Stream;

public interface GenreDAO {
    Stream<Genre> readAll();
    void add(Genre genre);
    void update(Genre genre);
}
