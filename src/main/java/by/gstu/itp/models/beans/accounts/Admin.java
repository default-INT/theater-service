package by.gstu.itp.models.beans.accounts;

import com.google.gson.JsonObject;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("4")
public class Admin extends User {

    public Admin() {
    }

    public Admin(int id, String name, String password, String email, String phone) {
        super(id, name, password, email, phone);
    }

    public Admin(JsonObject jsonObject) {
        super(jsonObject);
    }
}
