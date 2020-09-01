package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Play;

import java.util.stream.Stream;

public interface PlayDAO {
    Stream<Play> readAll();
    void add(Play play);
    void update(Play play);
}
