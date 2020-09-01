package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

/**
 * Immutable class describe play author.
 */
@Entity
@Table(name="authors")
public class Author extends EntityBean {

    @Column
    private String name;

    @OneToMany(mappedBy = "author")
    private List<Play> plays;

    public Author() {
    }

    public Author(int id, String name) {
        super(id);
        this.name = Objects.requireNonNull(name);
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
}
