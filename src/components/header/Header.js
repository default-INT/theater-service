import {node} from "../../util";
import LoginMenu from "./LoginMenu";
import ContentManager from "../../managers/ContentManager";


const Title = node({
    children: 'Cinema',
    classList: ['title'],
    onclick: e => ContentManager.roteNewUrl('/plays')
});

export default node({
    type: 'header',
    id: 'header',
    children: [
        Title,
        LoginMenu
    ]
});