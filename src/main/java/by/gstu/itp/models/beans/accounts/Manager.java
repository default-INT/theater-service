package by.gstu.itp.models.beans.accounts;

import com.google.gson.JsonObject;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("3")
public class Manager extends User {

    public Manager() {
    }

    public Manager(int id, String name, String password, String email, String phone) {
        super(id, name, password,  email, phone);
    }

    public Manager(JsonObject jsonObject) {
        super(jsonObject);
    }
}
