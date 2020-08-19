const elementSelector = {
    'string': child => document.createTextNode(child),
    'function': child => document.createElement(child),
    'object': child => child
}

/**
 *
 * @param option {object}
 * @returns {HTMLDivElement}
 */
export const node = function (option) {
    const type = option.type ? option.type : 'div';
    const element = document.createElement(type);

    if (option.children) {
        if (option.children instanceof Array) {
            option.children.forEach(child => element.appendChild(elementSelector[typeof child](child)));
        } else {
            element.appendChild(elementSelector[typeof option.children](option.children));
        }
    }

    if (option.href) {
        element.href = option.href;
    }

    element.onclick = option.onclick ? option.onclick : element.onclick;
    element.onload = option.onload ? option.onload : element.onload;

    if (option.classList) {
        element.classList.add(option.classList);
    }

    if (option.id) {
        element.id = option.id;
    }

    return element;
}