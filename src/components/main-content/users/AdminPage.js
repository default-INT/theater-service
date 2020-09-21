import {node} from "../../../util";
import {UserMenuTitle} from "./UserPage";
import ItemLine from "./ItemLine";
import UserManager from "../../../managers/UserManager";

const EMAIL_PATTERN = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const PASSWORD_PATTERN = /^[a-zA-z]{1}[a-zA-Z0-9_/!/@/#/$/%/&]{3,20}$/i;
const PHONE_PATTERN = /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/;

const validator = {
    emailTest: text => EMAIL_PATTERN.test(text),
    passwordTest: text => PASSWORD_PATTERN.test(text),
    phoneTest: text => PHONE_PATTERN.test(text)
}


const AddCourier = node({
    classList: ['add-courier'],
    children: [
        node({
            classList: ['title'],
            children: 'Add courier'
        }),
        node({
            classList: ['add-form'],
            children: [
                node({
                    type: 'input',
                    placeholder: 'Input name',
                    name: 'name'
                }),
                node({
                    type: 'input',
                    inputType: 'password',
                    placeholder: 'Input password',
                    name: 'password'
                }),
                node({
                    type: 'input',
                    inputType: 'password',
                    placeholder: 'Confirm password',
                    name: 'confirm-password'
                }),
                node({
                    type: 'input',
                    placeholder: 'Input email',
                    name: 'email'
                }),
                node({
                    type: 'input',
                    placeholder: 'Input phone',
                    name: 'phone'
                }),
                node({
                    id: 'add-msg',
                    classList: ['msg'],
                    children: 'Input text to input forms'
                }),
                node({
                    type: 'a',
                    classList: ['add-btn'],
                    children: 'Add courier',
                    onclick: e => {
                        const name = document.querySelector('.add-courier input[name="name"]').value;
                        const password = document.querySelector('.add-courier input[name="password"]').value;
                        const confirmPassword = document.querySelector('.add-courier input[name="confirm-password"]')
                            .value;
                        const email = document.querySelector('.add-courier input[name="email"]').value;
                        const phone = document.querySelector('.add-courier input[name="phone"]').value;

                        if (validator.emailTest(email) && validator.passwordTest(password)
                            && validator.phoneTest(phone) && password === confirmPassword) {
                            UserManager.getInstance().addCourier({
                                name: name,
                                password: password,
                                email: email,
                                phone: phone
                            });
                        } else {
                            document.getElementById('add-msg').innerText = 'Email or password incorrect';
                        }
                    }
                })
            ]
        }),
    ]
})

export const AdminHeader = user => node({
    classList: ['user-header'],
    children: [
        ItemLine('Name: ', user.name),
        ItemLine('email: ', user.email),
        ItemLine('phone', user.phone)
    ]
});

export default admin => node({
    classList: ['user-page'],
    children: [
        UserMenuTitle('Admin menu'),
        AdminHeader(admin),
        AddCourier
    ]
})