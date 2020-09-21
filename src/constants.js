export const SERVER_URL = 'http://localhost:8080/data-api';
export const ACCESS_CONTROL_ALLOW_HEADER = "*";
export const CONTENT_TYPE_JSON = 'application/json;charset=utf-8';
export const HEADERS = {
    CONTENT_TYPE: "Content-Type",
    ACCESS_CONTROL: "Access-Control-Allow-Origin"
};
export const MAIN_CONTAINER_QUERY = '#main-container';
export const ANSWER_STATUS = {
    COMPLETED: "COMPLETED"
}
export const ERROR_ACCOUNT_CONST = {
    404: function () {
        throw new Error('Wrong login or password')
    } ,
    406: function () {
        throw new Error('Incorrect data input')
    },
    500: function () {
        throw new Error('Something went wrong on server')
    },
    DEFAULT: function () {
        throw new Error('Something went wrong...')
    }
}