import {node} from "../../util";
import PlayList from "./PlayList";

const plays = [
    {
        title: 'Synthesizer love',
        author: 'A. Eykborn',
        genre: 'Comedy',
        dates: [
            '3.02',
            '15.02',
            '27..02'
        ]
    }
]

export default node({
    type: 'section',
    id: 'content',
    children: node({
        type: 'main',
        children: [
            node({
                classList: ['title'],
                children: 'Plays'
            }),
            PlayList(plays)
        ]
    })
});