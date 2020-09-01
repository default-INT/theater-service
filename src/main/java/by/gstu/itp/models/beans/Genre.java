package by.gstu.itp.models.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "genres")
public class Genre extends EntityBean {
    @Column
    private String name;

    @OneToMany(mappedBy = "genre")
    private List<Play> plays;

    public Genre() {
    }

    public Genre(int id, String name) {
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
