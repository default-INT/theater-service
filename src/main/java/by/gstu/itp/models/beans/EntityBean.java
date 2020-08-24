package by.gstu.itp.models.beans;

import by.gstu.itp.models.exceptions.NegativeIdException;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public abstract class EntityBean implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private final int id; //TODO: protected ??

    public EntityBean(int id) {
        if (id < 0) {
            throw new NegativeIdException(id);
        }
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
