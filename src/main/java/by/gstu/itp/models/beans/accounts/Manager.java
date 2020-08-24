package by.gstu.itp.models.beans.accounts;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("2")
public class Manager extends User {
    public Manager(int id, String name, String password, int roleId, String email, String phone) {
        super(id, name, password, roleId, email, phone);
    }
}
