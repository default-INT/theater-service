import {dateFormatter, node} from "../../../util";
import ItemLine from "./ItemLine";
import "../../../css/user-page.css"


export const UserHeader = user => node({
    classList: ['user-header'],
    children: [
        ItemLine('Name: ', user.name),
        ItemLine('email: ', user.email),
        ItemLine('phone', user.phone),
        ItemLine('Total orders price: ', user.orders.map(o => o.price).reduce((a, b) => a + b, 0).toFixed(2) + ' byn'),
        ItemLine('Count orders: ', user.orders.length + '')
    ]
});

const OrderItem = order => node({
    classList: ['order-item'],
    children: [
        node({
            classList: ['play-name'],
            children: order.date.play.name
        }),
        ItemLine('Date: ', dateFormatter(new Date(order.date.date))),
        ItemLine('Row: ', order.row + ''),
        ItemLine('Seat: ', order.seat + ''),
        ItemLine('Price: ', order.price + ' byn'),
        node({
            classList: [ 'item-line', 'status', (order.completed ? 'completed' : 'processing')],
            children: (order.completed ? 'Completed' : 'Processing')
        })
    ]
});

export const UserMenuTitle = title => node({
    classList: ['user-title'],
    children: title
})

const UserOrderList = orders => node({
    classList: ['user-order-list'],
    children: orders.map(order => OrderItem(order))
})

export default (user) => node({
    classList: ['user-page'],
    children: [
        UserMenuTitle('User menu'),
        UserHeader(user),
        UserOrderList(user.orders)
    ]
})