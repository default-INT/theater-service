import {node} from "../../util";
import ModalWindow, {ModalForm, Title} from "./ModalWindow";
import {ERROR_ACCOUNT_CONST, SERVER_URL} from "../../constants";
import UserManager from "../../managers/UserManager";

const LoginForm = ModalForm([
    Title('Authorization'),
    node({
        type: 'input',
        inputType: "text",
        placeholder: "Input email",
        name: "email"
    }),
    node({
        type: 'input',
        inputType: "password",
        placeholder: "Input password",
        name: "password"
    }),
    node({
        type: 'label',
        id: 'login-msg',
        classList: ['msg'],
        children: 'Input data to input forms'
    }),
    node({
        type: 'button',
        inputType: 'button',
        id: 'login-button',
        children: 'Log In',
        onclick: function (e) {
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            fetch(SERVER_URL + "/login", {
                method: 'POST',
                body: JSON.stringify({
                    email: email, password: password
                })
            }).then(resp => {
                if (!resp.ok) {
                    console.log(resp.status);
                    ERROR_ACCOUNT_CONST[resp.status] ? ERROR_ACCOUNT_CONST[resp.status]() : ERROR_ACCOUNT_CONST.DEFAULT();
                }
                return resp.json()
            })
                .then(user => {
                    UserManager.getInstance().setUser(user);

                }).catch(reason => {
                const loginMsgDOM = document.getElementById("login-msg");
                // const error = JSON.parse(reason.message)
                loginMsgDOM.innerHTML = reason;
            });
        }
    })
]);

export default ModalWindow(LoginForm, 'login-form');