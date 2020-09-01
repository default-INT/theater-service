package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Play;

import java.util.List;
import java.util.Optional;

public interface PlayDAO {
    Optional<List<Play>> readAll();
    void add(Play play);
    void update(Play play);
}
