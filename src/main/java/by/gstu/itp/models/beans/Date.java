package by.gstu.itp.models.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "dates")
public class Date extends EntityBean {
    @Column
    private final int playId;
    @Column
    private final LocalDate date;

    public Date(int id, int playId, LocalDate date) {
        super(id);
        this.playId = playId;
        this.date = Objects.requireNonNull(date);
    }

    public int getPlayId() {
        return playId;
    }

    public LocalDate getDate() {
        return LocalDate.from(date);
    }
}
