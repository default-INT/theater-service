package by.gstu.itp.models.beans.accounts;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("0")
public class Admin extends User {

    @Override
    protected int getDefaultRole() {
        return 0;
    }

    public Admin(int id, String name, String password, String email, String phone) {
        super(id, name, password, email, phone);
    }
}
