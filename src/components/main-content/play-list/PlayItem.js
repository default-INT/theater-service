import {dateFormatter, node} from "../../../util";
import ContentManager from "../../../managers/ContentManager";

/**
 *
 * @param title {string}
 * @returns {HTMLDivElement}
 * @constructor
 */
const PlayTitle = title => node({
    classList: ['play-title'],
    children: title
});

/**
 *
 * @param author {string}
 * @param genre {string}
 * @returns {HTMLDivElement}
 * @constructor
 */
const PlayInfo = (author, genre) => node({
    classList: ['play-info'],
    children: [
        node({
            classList: ['play-author'],
            children: author
        }),
        node({
            classList: ['play-genre'],
            children: genre
        })
    ]
});

/**
 *
 * @param dates {Array}
 * @returns {HTMLDivElement}
 * @constructor
 */
const PlayDates = dates => node({
    classList: ['play-dates'],
    children: dates.map(date => node({
        type: 'a',
        classList: ['date-link'],
        children: dateFormatter(new Date(date.date)),
        onclick: e => ContentManager.roteNewUrl('/date/' + date.id)
    }))
});

/**
 *
 * @param name {string}
 * @param author {string}
 * @param genre {string}
 * @param dates {Array}
 * @returns {HTMLDivElement}
 */
export default (name, author, genre, dates) => node({
    classList: ['play'],
    children: [
        PlayTitle(name),
        PlayInfo(author, genre),
        PlayDates(dates)
    ]
});