package by.gstu.itp.models.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "genres")
public class Genre extends EntityBean {
    @Column
    private final String name;

    public Genre(int id, String name) {
        super(id);
        this.name = Objects.requireNonNull(name);
    }

    public String getName() {
        return name;
    }
}
