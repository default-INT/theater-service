package by.gstu.itp.models.beans;

import java.time.LocalDate;
import java.util.Objects;

public class Date {
    private final int id;
    private final int playId;
    private final LocalDate date;

    public Date(int id, int playId, LocalDate date) {
        this.id = id;
        this.playId = playId;
        this.date = Objects.requireNonNull(date);
    }

    public int getId() {
        return id;
    }

    public int getPlayId() {
        return playId;
    }

    public LocalDate getDate() {
        return LocalDate.from(date);
    }
}
