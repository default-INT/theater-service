import {node} from "../../util";

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
        href: '/' + date,
        classList: ['date-link'],
        children: date
    }))
});

/**
 *
 * @param title {string}
 * @param author {string}
 * @param genre {string}
 * @param dates {Array}
 * @returns {HTMLDivElement}
 */
export default (title, author, genre, dates) => node({
    classList: ['play'],
    children: [
        PlayTitle(title),
        PlayInfo(author, genre),
        PlayDates(dates)
    ]
});