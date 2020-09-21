import {node} from "../../util";
import UserManager from "../../managers/UserManager";

export const loginBtnChildren = [
    node({
        type: 'a',
        children: 'Log In',
        onclick: e => {
            const loginForm = document.getElementById('login-form');
            loginForm.style.display = 'block';
        }
    }),
    node({
        type: 'a',
        children: 'Registration',
        onclick: e => {
            const loginForm = document.getElementById('registration-form');
            loginForm.style.display = 'block';
        }
    })
]

const UtilBtn = node({
    id: 'util-btn',
    children: loginBtnChildren
});

export const LogoutBtn = node({
    type: 'a',
    children: 'Log Out',
    onclick: e => {
        UserManager.getInstance().logOut();

    }
});

export default node({
    id: 'login-menu',
    children: [
        node({children: 'Status: '}),
        node({id: 'user-status', children: 'guest'}),
        UtilBtn
    ]
});