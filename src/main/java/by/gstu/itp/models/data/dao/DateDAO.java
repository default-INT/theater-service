package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Date;

import java.util.stream.Stream;

public interface DateDAO {
    Stream<Date> readAll();
    void add(Date date);
    void update(Date date);
}
