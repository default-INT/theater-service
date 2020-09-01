package by.gstu.itp.models.data.dao;

import by.gstu.itp.models.beans.Date;

import java.util.List;
import java.util.Optional;

public interface DateDAO {
    Optional<List<Date>> readAll();
    void add(Date date);
    void update(Date date);
}
