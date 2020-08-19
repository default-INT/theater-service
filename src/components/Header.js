import {node} from "../util";

const Title = node({
    children: 'Theater',
    classList: ['title']
});

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
})

const LoginMenu = node({
    id: 'login-menu',
    children: [
        node({children: 'User: '}),
        node({id: 'user-status', children: 'guest'}),
        UtilBtn
    ]
})

export default node({
    type: 'header',
    id: 'header',
    children: [
        Title,
        LoginMenu
    ]
});