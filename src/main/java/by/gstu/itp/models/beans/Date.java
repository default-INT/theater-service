package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

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
    @OneToMany(mappedBy = "date")
    private Set<Order> orders;

    public Date() {
    }

    public Date(int id, Play play, LocalDate date) {
        super(id);
        this.play = Objects.requireNonNull(play);
        this.date = Objects.requireNonNull(date);
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Date date1 = (Date) o;
        return date.equals(date1.date) &&
                play.equals(date1.play);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, play);
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
