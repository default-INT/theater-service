package by.gstu.itp.models.beans.accounts;

public class Admin extends User {
    public Admin(int id, String name, String password, int roleId, String email, String phone) {
        super(id, name, password, roleId, email, phone);
    }
}
