package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;


@Entity
@Table(name="authors")
@Access(AccessType.FIELD)
public class Author extends EntityBean {
    @Column
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    private List<Play> plays;

    public Author() {
    }

    public Author(int id, String name) {
        super(id);
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Author)) return false;
        Author author = (Author) o;
        return name.equals(author.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "Author{" +
                "id=" + getId() +
                ", name='" + name + '\'' +
                '}';
    }
}