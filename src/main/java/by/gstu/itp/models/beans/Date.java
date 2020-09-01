package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "dates")
public class Date extends EntityBean {
    @Column(name = "play_id")
    private int playId;
    @Column
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "play_id")
    private Play play;

    public Date() {
    }

    public Date(int id, int playId, LocalDate date) {
        super(id);
        this.playId = playId;
        this.date = Objects.requireNonNull(date);
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
}
