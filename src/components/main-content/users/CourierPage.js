import {dateFormatter, node} from "../../../util";
import ItemLine from "./ItemLine";
import "../../../css/user-page.css"
import {UserHeader, UserMenuTitle} from "./UserPage";
import {SERVER_URL} from "../../../constants";


const OrderItem = order => node({
    id: 'order-' + order.id,
    classList: ['order-item'],
    children: [
        node({
            classList: ['play-name'],
            children: order.date.play.name
        }),
        ItemLine('Date: ', dateFormatter(new Date(order.date.date))),
        ItemLine('Row: ', order.row + ''),
        ItemLine('Seat: ', order.seat + ''),
        ItemLine('Price: ', order.price.toFixed(2) + ' byn'),
        node({
            type: 'a',
            classList: ['complete-btn'],
            children: 'Complete',
            onclick: e => {
                fetch(SERVER_URL +'/complete-order', {
                    method: 'POST',
                    body: JSON.stringify({
                        orderId: order.id
                    })
                }).then(response => {
                    if (!response.ok) {
                        throw new Error('Something went wrong...')
                    }
                    return response.json();
                }).then(answer => {
                    if (!answer.result) {
                        throw new Error('Failed to complete the order');
                    }
                    document.getElementById('order-' + order.id).remove();
                }).catch(reason => alert(reason));
            }
        })
    ]
});

const UserOrderList = orders => node({
    classList: ['user-order-list'],
    children: orders.map(order => OrderItem(order))
})

export default (user) => node({
    classList: ['user-page'],
    children: [
        UserMenuTitle('Courier menu'),
        UserHeader(user),
        UserOrderList(user.orders)
    ]
})