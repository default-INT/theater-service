package by.gstu.itp.models.beans.accounts;

import com.google.gson.JsonObject;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("2")
public class Courier extends User {

    public Courier() {
    }

    public Courier(int id, String name, String password, String email, String phone) {
        super(id, name, password, email, phone);
    }

    public Courier(JsonObject jsonObject) {
        super(jsonObject);
    }
}
