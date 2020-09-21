import UserManager from "./UserManager";
import {ACCESS_CONTROL_ALLOW_HEADER, ANSWER_STATUS, CONTENT_TYPE_JSON, HEADERS, SERVER_URL} from "../constants";
import ContentManager from "./ContentManager";

const getTicketDiscount = {
    CHEAP: 0.9,
    DEFAULT: 1,
    EXPENSIVE: 1.2
}

export default class OrderManager {
    static _instance
    static getInstance() {
        if (!OrderManager._instance) {
            OrderManager._instance = new OrderManager();
        }
        return OrderManager._instance;
    }
    static newInstance() {
        OrderManager._instance = new OrderManager();
        return OrderManager._instance;
    }
    constructor() {
        this._tickets = [];
        this._categorySchema = {
            cheapTicketRowStart: 1,
            cheapTicketRowEnd: 2,
            defaultTicketRowStart: 3,
            defaultTicketRowEnd: 4,
            expensiveTicketRowStart: 5,
            expensiveTicketRowEnd: 6
        }
    }
    addTicket(ticket) {
        ticket.type = this._ticketTypeSearcher(ticket);
        this._tickets.push(ticket);
        this.showTicketPrice()
    }
    deleteTicket(ticket) {
        this._tickets = this._tickets.filter(t => t.row !== ticket.row && t.seat !== ticket.seat)
        this.showTicketPrice()
    }
    showTicketPrice() {
        const totalCostDOM = document.getElementById('order-total-cost');

        const cheapTicketCostDOM = document.getElementById('cheap-ticket-count');
        const defaultTicketCostDOM = document.getElementById('default-ticket-count');
        const expensiveTicketCostDOM = document.getElementById('expensive-ticket-count');

        const cheapTickets = this._tickets.filter(t => t.type === 'CHEAP');
        const defaultTickets = this._tickets.filter(t => t.type === 'DEFAULT');
        const expensiveTickets = this._tickets.filter(t => t.type === 'EXPENSIVE');

        const totalCost = this._tickets.map(t => getTicketDiscount[t.type] * 6)
            .reduce((a, b) => a + b, 0);

        const cheapTicketTotalCost = cheapTickets.length * getTicketDiscount.CHEAP * 6;

        const defaultTicketTotalCost = defaultTickets.length * getTicketDiscount.DEFAULT * 6;

        const expensiveTicketTotalCost = expensiveTickets.length * getTicketDiscount.EXPENSIVE * 6;

        totalCostDOM.innerHTML = totalCost.toFixed(2) + ' byn.';

        cheapTicketCostDOM.innerText = cheapTickets.length + ' * ' + (6 * getTicketDiscount.CHEAP).toFixed(2)
            + ' = ' + cheapTicketTotalCost.toFixed(2);
        defaultTicketCostDOM.innerText = defaultTickets.length + ' * ' + (6 * getTicketDiscount.DEFAULT).toFixed(2)
            + ' = ' + defaultTicketTotalCost.toFixed(2);
        expensiveTicketCostDOM.innerText = expensiveTickets.length + ' * ' + (6 * getTicketDiscount.EXPENSIVE).toFixed(2)
            + ' = ' + expensiveTicketTotalCost.toFixed(2);
    }
    sendOrder(date) {
        const user = UserManager.getInstance().getUser();
        if (!date) {
            alert("Error: Date is unknown");
            console.error("Date is unknown")
            return;
        }
        if (!user) {
            alert("Error: User is undefined");
            console.error("User is undefined")
            return;
        }
        if (user.name.toUpperCase() === 'USER') {
            alert("Error: User is undefined");
            console.error("User is undefined")
            return;
        }
        if (user.role !== 'User') {
            alert("Error: User with role '" + user.role + "'can't take order.");
            console.error("User with role '" + user.role + "'can't take order.")
            return;
        }
        const orders = this._tickets.map(ticket => ({
            row: ticket.row,
            seat: ticket.seat,
            user: user,
            dateId: date.id
        }));

        fetch(SERVER_URL + '/add-order', {
            method: 'POST',
            body: JSON.stringify(orders)
        }).then(response => response.json())
            .then(answer => {
                if (answer.status === ANSWER_STATUS.COMPLETED) {
                    ContentManager.roteNewUrl('/date/' + date.id);
                    console.log("completed")
                }
            }).catch(reject => {
            alert("Order not take... Something went wrong. Error: " + reject);
        });
    }
    _ticketTypeSearcher(ticket) {
        if (this._categorySchema.cheapTicketRowStart <= ticket.row
            && ticket.row <=  this._categorySchema.cheapTicketRowEnd) {
            return 'CHEAP';
        } else if (this._categorySchema.expensiveTicketRowStart <= ticket.row
            && ticket.row <=  this._categorySchema.expensiveTicketRowEnd) {
            return 'EXPENSIVE';
        } else {
            return 'DEFAULT';
        }
    }
}