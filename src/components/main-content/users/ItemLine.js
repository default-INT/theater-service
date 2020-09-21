import {node} from "../../../util";


export default (property, value) => node({
    classList: ['item-line'],
    children: [
        node({
            children: property
        }),
        node({
            children: value
        })
    ]
});