package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

/**
 * Immutable class describe play author.
 */
@Entity
@Table(name="authors")
@Access(AccessType.FIELD)
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private int id; //TODO: protected ??

    @Column
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    private List<Play> plays;

    public Author() {
    }

    public Author(int id, String name) {
        this.id = id;
        this.name = Objects.requireNonNull(name);
    }

    public Author(String name) {
        this(0, name);
    }

    public List<Play> getPlays() {
        return plays;
    }

    public void setPlays(List<Play> plays) {
        this.plays = plays;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Author{" +
                "id=" + getId() +
                ", name='" + name + '\'' +
                '}';
    }
}
