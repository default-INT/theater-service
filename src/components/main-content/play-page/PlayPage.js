import {dateFormatter, node} from "../../../util";
import Hall from "./Hall";
import OrderManager from "../../../managers/OrderManager";
import {SERVER_URL} from "../../../constants";
import ContentManager from "../../../managers/ContentManager";

const PlayTitle = name => node({
    classList: ['title'],
    children: node({
        classList: ['title-content'],
        children: name
    })
});

const PlayInfo = (genre, author) => node({
    classList: ['short-info'],
    children: [
        node({
            children: 'Genre: ' + genre
        }),
        node({
            children: 'Author: ' + author
        })
    ]
});

const OtherDates = (dates, selectedDate) => node({
    classList: ['other-dates'],
    children: dates.map(date => node({
        type: 'a',
        classList: ['date-link', date.id === selectedDate.id ? 'selected-date' : null ],
        onclick: e => ContentManager.roteNewUrl('/date/' + date.id),
        children: dateFormatter(new Date(date.date))
    }))
});

const CategoryInfo = (label, count) => node({
    classList: ['category-line'],
    children: [
        label + ':',
        node({
            id: label.toLowerCase()
                .trim()
                .replace(' ', '-')
                + '-count',
            children: count + ''
        })
    ]
})

const TicketInfo = () => node({
    classList: ['select-tickets-info'],
    children: [
        CategoryInfo('Cheap ticket', 0),
        CategoryInfo('Default ticket', 0),
        CategoryInfo("Expensive ticket", 0)
    ]
});

const TotalCost = () => node({
    classList: ['order-total-cost'],
    children: node({
        classList: ['total-cost-content'],
        children: [
            'Total cost: ',
            node({
                id: 'order-total-cost',
                children: '0'
            })
        ]
    })
});

const CompleteOrderSection = date => node({
    classList: ['complete-order-section'],
    children: [
        node({
            type: 'a',
            children: 'Order',
            onclick: function (e) {
                OrderManager.getInstance().sendOrder(date)
            }
        }),
        node({
            type: 'a',
            children: 'Cancel order',
            onclick: function (e) {
                ContentManager.roteNewUrl("/date/" + date.id);
            }
        })
    ]
});

const rowSchema = [
    { seats: 8 },
    { seats: 8 },
    { seats: 10 },
    { seats: 10 },
    { seats: 14 },
    { seats: 14 }
];

const orderedTickets = [
];

export default date => node({
    id: 'date-' + date.id,
    classList: ['play-page'],
    onload: () => {
        OrderManager.newInstance();
        fetch(SERVER_URL + '/hall-info/' + date.id)
            .then(response => response.json())
            .then(hallInfo => {

                const playHall = document.getElementById('play-hall');
                playHall.innerHTML = '';
                playHall.appendChild(Hall(hallInfo.hallSchema, hallInfo.allTickets));


            })
    },
    children: [
        PlayTitle(date.play.name),
        PlayInfo(date.play.genre, date.play.author),
        OtherDates(
            date.play.dates
                .sort((d1, d2) => new Date(d1.date) - new Date(d2.date)),
            date),
        Hall(rowSchema, orderedTickets),
        TicketInfo(),
        TotalCost(),
        CompleteOrderSection(date)
    ]
});