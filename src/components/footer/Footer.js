import {node} from "../../util";


export default node({
    type: 'footer',
    id: 'footer',
    children: [
        node({
            children: 'Developed by Evgeniy Trofimov',
            classList: ['developer']
        }),
        node({
            type: 'a',
            children: 'default@edu.gstu.by',
            classList: ['developer-link'],
            href: ''
        })
    ]
});