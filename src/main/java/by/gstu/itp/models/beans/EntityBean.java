package by.gstu.itp.models.beans;

import by.gstu.itp.models.exceptions.NegativeIdException;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public abstract class EntityBean implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private int id;

    public EntityBean() { }

    public EntityBean(int id) {
        if (id < 0) {
            throw new NegativeIdException(id);
        }
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        if (id < 0) {
            throw new NegativeIdException(id);
        }
        this.id = id;
    }

    @Override
    public String toString() {
        return "EntityBean{" +
                "id=" + id +
                '}';
    }
}
