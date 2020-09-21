import {loginBtnChildren, LogoutBtn} from "../components/header/LoginMenu";
import {clearForms, node} from "../util";
import {ERROR_ACCOUNT_CONST, SERVER_URL} from "../constants";
import ContentManager from "./ContentManager";

const crypto = require('crypto');

export default class UserManager {
    static _instance;
    static getInstance() {
        if (!this._instance) {
            this._instance = new UserManager();
        }
        return this._instance;
    }
    constructor() {
        this._logInUser = {
            id: 1,
            name: 'user',
            role: 'User'
        }
    }
    getAuthUser() {
        fetch(SERVER_URL + "/auth")
            .then(response => response.json())
            .then(user => {
                if (user.status) {
                    console.info(user.error);
                    return;
                }
                this.setUser(user);
            });
    }
    createUser(user) {
        user.role = 'User';
        const password = crypto.ha
        fetch(SERVER_URL + '/reg', {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(response => {
            if (!response.ok) {
                console.error(response.status);
                ERROR_ACCOUNT_CONST[response.status] ? ERROR_ACCOUNT_CONST[response.status]() :
                    ERROR_ACCOUNT_CONST.DEFAULT();
            }
            return response.json();
        })
            .then(user => {
                this.setUser(user);
                clearForms();
                document.getElementById('registration-form').style.display = 'none';
            }).catch(reason => {
                const regMsgDOM = document.getElementById("reg-msg");
                // const error = JSON.parse(reason.message)
                regMsgDOM.innerHTML = reason;
            }
        );
    }
    addCourier(courier) {
        courier.role = "Courier";
        fetch(SERVER_URL + '/courier', {
            method: 'POST',
            body: JSON.stringify(courier)
        }).then(response => {
            if (!response.ok) {
                console.log(response.status);
                ERROR_ACCOUNT_CONST[response.status] ? ERROR_ACCOUNT_CONST[response.status]() :
                    ERROR_ACCOUNT_CONST.DEFAULT();
            }
            return response.json();
        }).then(answer => {
            if (!answer.result) {
                document.getElementById('add-msg').innerText = 'Failed to create courier';
            }
            document.getElementById('add-msg').innerText = 'Courier created successful';
            const inputs = document.querySelectorAll('.add-courier input');
            inputs.forEach(input => input.value = '')
        })
    }
    setUser(user) {
        this._logInUser = user;
        const userStatus = document.getElementById('user-status');

        userStatus.innerHTML = '';
        userStatus.appendChild(node({
            type: 'a',
            classList: ['role-menu-link'],
            children: user.role.toLowerCase(),
            onclick: () => ContentManager.roteNewUrl("/user-menu")
        }));

        const utilBtn = document.getElementById('util-btn');

        clearForms();
        document.getElementById('login-form').style.display = 'none';

        utilBtn.innerHTML = '';
        utilBtn.appendChild(LogoutBtn);
    }
    getUser() {
        return this._logInUser;
    }
    logOut() {
        fetch(SERVER_URL + "/logout", {
            method: 'POST'
        }).then(response => response.json())
            .then(answer => {
                if (answer.status !== 'LOGOUT') {
                    return;
                }

                this._logInUser = null;
                const userStatus = document.getElementById('user-status');

                const utilBtn = document.getElementById('util-btn');
                utilBtn.innerHTML = '';
                loginBtnChildren.forEach(btn => utilBtn.appendChild(btn));

                userStatus.innerHTML = 'guest';
                ContentManager.roteNewUrl('/plays');
            });
    }
}