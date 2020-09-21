import {node} from "../../../util";
import Play from "./PlayItem";


/**
 *
 * @param plays {Array}
 * @returns {HTMLDivElement}
 */
export default plays => node({
    classList: ['plays'],
    children: plays.map(play => Play(play.name, play.author, play.genre,
        play.dates.sort((d1, d2) => new Date(d1.date) - new Date(d2.date))))
});