import {node} from "../../util";
import Play from "./Play";

/**
 *
 * @param plays {Array}
 * @returns {HTMLDivElement}
 */
export default plays => node({
    classList: ['plays'],
    children: plays.map(play => Play(play.title, play.author, play.genre, play.dates))
});