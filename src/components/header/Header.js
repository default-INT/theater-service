import {node} from "../../util";
import LoginMenu from "./LoginMenu";


const Title = node({
    children: 'Theater',
    classList: ['title']
});

export default node({
    type: 'header',
    id: 'header',
    children: [
        Title,
        LoginMenu
    ]
});