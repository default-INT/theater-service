package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "genres")
@Access(AccessType.FIELD)
public class Genre extends EntityBean {
    @Column
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "genre")
    private List<Play> plays;

    public Genre() {
    }

    public Genre(int id, String name) {
        super(id);
        this.name = Objects.requireNonNull(name);
    }

    public Genre(String name) {
        this(0, name);
    }

    public List<Play> getPlays() {
        return plays;
    }

    public void setPlays(List<Play> plays) {
        this.plays = plays;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Genre)) return false;
        Genre genre = (Genre) o;
        return name.equals(genre.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "Genre{" +
                "id=" + getId() +
                ", name='" + name + '\'' +
                '}';
    }
}
