import {node} from "../../util";


const UtilBtn = node({
    id: 'util-btn',
    children: [
        node({
            type: 'a',
            children: 'Login',
            href: ''
        }),
        node({
            type: 'a',
            children: 'Registration',
            href: ''
        })
    ]
});

export default node({
    id: 'login-menu',
    children: [
        node({children: 'User: '}),
        node({id: 'user-status', children: 'guest'}),
        UtilBtn
    ]
});