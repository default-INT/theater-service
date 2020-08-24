package by.gstu.itp.models.beans.accounts;

import by.gstu.itp.models.exceptions.PatternException;
import org.junit.Test;

import static org.junit.Assert.*;

public class UserTest {

    @Test
    public void createCorrectAdminTest() {
        var admin = new Admin(1, "Admin", "vcdfg142", "mail@gmail.com", "+375(29)817-47-53");
        assertEquals(0, admin.getRoleId());
    }

    @Test
    public void createCorrectCourierTest() {
        var courier = new Courier(1, "Admin", "vcdfg142", "mail@gmail.com", "+375(29)817-47-53");
        assertEquals(1, courier.getRoleId());
    }

    @Test
    public void createCorrectManagerTest() {
        var manager = new Manager(1, "Admin", "vcdfg142", "mail@gmail.com", "+375(29)817-47-53");
        assertEquals(2, manager.getRoleId());
    }

    @Test
    public void createCorrectUserTest() {
        var user = new User(1, "Ivanov", "vcdfg142", "mail@gmail.com", "+375(29)817-47-53");
        assertEquals(3, user.getRoleId());
    }

    @Test
    public void incorrectEmailAccountTest() {
        assertThrows(PatternException.class, () -> new Admin(1, "I.V. Ivanov",
                "fdsf2144xsc", "email", "+375(29)817-47-53"));
    }

    @Test
    public void incorrectPhoneNumberAccountTest() {
        assertThrows(PatternException.class, () -> new Admin(1, "I.V. Ivanov",
                "fdsf2144xsc", "email", "817-47-53"));
    }
}