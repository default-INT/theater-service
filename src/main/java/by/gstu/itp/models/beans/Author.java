package by.gstu.itp.models.beans;

import java.util.Objects;

/**
 * Immutable class describe play author.
 */
public class Author {
    private final int id;
    private final String name;

    public Author(int id, String name) {
        this.id = id;
        this.name = Objects.requireNonNull(name);
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
