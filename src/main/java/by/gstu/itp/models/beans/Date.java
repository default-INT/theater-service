package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "dates")
@Access(AccessType.FIELD)
public class Date extends EntityBean {
    @Column(name = "play_id", updatable = false, insertable = false)
    private int playId;
    @Column
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "play_id")
    private Play play;

    public Date() {
    }

    public Date(int id, Play play, LocalDate date) {
        super(id);
        this.play = Objects.requireNonNull(play);
        this.date = Objects.requireNonNull(date);
    }

    public Date(Play play, LocalDate date) {
        this(0, play, date);
    }

    public void setPlayId(int playId) {
        this.playId = playId;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Play getPlay() {
        return play;
    }

    public void setPlay(Play play) {
        this.play = play;
    }

    public int getPlayId() {
        return playId;
    }

    public LocalDate getDate() {
        return LocalDate.from(date);
    }

    @Override
    public String toString() {
        return "Date{" +
                "id=" + getId() +
                ", playId=" + playId +
                ", date=" + date +
                ", play=" + play +
                '}';
    }
}
