import {node} from "../../util";
import ModalWindow, {ModalForm, Title} from "./ModalWindow";
import UserManager from "../../managers/UserManager";

const EMAIL_PATTERN = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const PASSWORD_PATTERN = /^[a-zA-z]{1}[a-zA-Z0-9_/!/@/#/$/%/&]{3,20}$/i;
const PHONE_PATTERN = /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/;

const validator = {
    emailTest: text => EMAIL_PATTERN.test(text),
    passwordTest: text => PASSWORD_PATTERN.test(text),
    phoneTest: text => PHONE_PATTERN.test(text)
}

const RegistrationForm = ModalForm([
    Title('Registration'),
    node({
        type: 'input',
        inputType: "text",
        placeholder: "Input name",
        name: "name"
    }),
    node({
        type: 'input',
        inputType: "password",
        placeholder: "Input password",
        name: "password"
    }),
    node({
        type: 'input',
        inputType: "password",
        placeholder: "Confirm password",
        name: "confirm-password"
    }),
    node({
        type: 'input',
        inputType: "text",
        placeholder: "Input email",
        name: "email"
    }),
    node({
        type: 'input',
        inputType: "text",
        placeholder: "Input phone",
        name: "phone"
    }),
    node({
        id: 'reg-msg',
        type: 'label',
        classList: ['msg'],
        children: 'Input data to input forms'
    }),
    node({
        type: 'button',
        inputType: 'button',
        id: 'login-button',
        children: 'Registration',
        onclick: function (e) {
            const name = document.querySelector('#registration-form input[name="name"]').value;
            const password = document.querySelector('#registration-form input[name="password"]').value;
            const confirmPassword = document.querySelector('#registration-form input[name="confirm-password"]')
                .value;
            const email = document.querySelector('#registration-form input[name="email"]').value;
            const phone = document.querySelector('#registration-form input[name="phone"]').value;

            if (validator.emailTest(email) && validator.passwordTest(password)
                    && validator.phoneTest(phone) && password === confirmPassword) {
                UserManager.getInstance().createUser({
                    name: name,
                    password: password,
                    email: email,
                    phone: phone
                });
            } else {
                document.getElementById('reg-msg').innerText = 'Email or password incorrect';
            }
        }
    })
]);

export default ModalWindow(RegistrationForm, 'registration-form');