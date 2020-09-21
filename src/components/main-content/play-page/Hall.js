import {node} from "../../../util";
import OrderManager from "../../../managers/OrderManager";

function checkSeat() {

}

function getSeats(rowId, numberSeat, orderedTicket) {
    const seats = [];
    for (let i = 0; i < numberSeat; i++) {
        const saleCheck = orderedTicket.filter(ticket => ticket.row === (rowId +1) && ticket.seat === (i + 1))
            .length > 0;
        seats.push(Seat(rowId + 1, i + 1, saleCheck ? seatType.SALE : seatType.DEFAULT));
    }
    return seats;
}

const seatType = {
    SALE: true,
    DEFAULT: false
}

const Seat = (row, number, type) => node({
    classList: ['seat'],
    children: [
        node({
            type: 'input',
            name: 'seat-' + row + number,
            inputType: 'checkbox',
            classList: ['custom-checkbox'],
            disabled: type,
            onclick: function (e) {
                console.log(e);
            }
        }),
        node({
            type: 'label',
            for: 'seat-' + row + number,
            onclick: function (e) {
                const checkbox = document.querySelector("input[name=" + this.for + "]");
                checkbox.checked = !checkbox.checked;
                if (type) return;
                if (checkbox.checked) {
                    OrderManager.getInstance().addTicket({row, seat: number});
                } else {
                    OrderManager.getInstance().deleteTicket({row, seat: number});
                }
            }
        })
    ]
});

const RowSeats = (rowId, numberSeat, orderedTicket) => node({
    classList: ['row'],
    children: getSeats(rowId, numberSeat, orderedTicket)
});

export default (rowsSchema, orderedTicket) => node({
    id: 'play-hall',
    classList: ['play-hall'],
    children: rowsSchema.map((row, i) => RowSeats(i, row.seats, orderedTicket))
});