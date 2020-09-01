package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Genre;

import java.util.List;
import java.util.Optional;

public interface GenreDAO {
    Optional<List<Genre>> readAll();
    void add(Genre genre);
    void update(Genre genre);
}
