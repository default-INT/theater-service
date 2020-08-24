package by.gstu.itp.models.beans;

import javax.persistence.*;
import java.util.Objects;

/**
 * Immutable class describe play author.
 */
@Entity
@Table(name="authors")
public class Author extends EntityBean {

    @Column(unique = true)
    private final String name;

    public Author(int id, String name) {
        super(id);
        this.name = Objects.requireNonNull(name);
    }

    public String getName() {
        return name;
    }
}
