import {clearForms, node} from "../../util";
import '../../css/modal-window.css'

export const ModalForm = (children) => node({
    id: 'auth-form',
    type: 'form',
    classList: ['modal-content', 'animate'],
    children: node({
        classList: ['container'],
        children
    })
});

export const Title = title => node({
    type: 'h1',
    children: title
})

export default (children, id) => node({
    id,
    classList: ['modal', 'login-form'],
    onload: () => {
        window.onclick = function(event) {
            const modals = Array.from(document.getElementsByClassName("modal"));
            modals.forEach(function(modal, index, modals) {
                if (event.target === modal) {
                    modal.style.display = "none";
                    clearForms();
                }
            });
        };
    },
    children
});