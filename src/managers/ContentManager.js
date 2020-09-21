import PlayList from "../components/main-content/play-list/PlayList";
import UserManager from "./UserManager";
import {MAIN_CONTAINER_QUERY, SERVER_URL} from "../constants";
import PlayPage from "../components/main-content/play-page/PlayPage";
import Loader from "../components/main-content/Loader";
import UserPage from "../components/main-content/users/UserPage";
import CourierPage from "../components/main-content/users/CourierPage";
import AdminPage from "../components/main-content/users/AdminPage";

const pushToHistory = newPath => {
    if (getUrlPath(document.URL) !== newPath) {
        history.pushState(null, null,newPath);
    }
}

const setLoader = queryRootNode => {
    const rootNode = document.querySelector(queryRootNode);
    rootNode.innerHTML = ''
    rootNode.append(Loader);
}

const userMenu = {
    USER: user => UserPage(user),
    COURIER: courier => CourierPage(courier),
    ADMIN: admin => AdminPage(admin)
}

const toUrls = {
    PLAYS: () => {
        setLoader('#main-container');
        fetch(SERVER_URL + '/plays')
            .then(response => response.json())
            .then(plays => {
                pushToHistory('/plays')
                ContentManager.changeContent(PlayList(plays), MAIN_CONTAINER_QUERY);
            });
    },
    DATE: path => {
        // setLoader('#main-container');
        const dateId = parseInt(path);
        fetch(SERVER_URL + '/date/' + dateId)
            .then(response => response.json())
            .then(date => {
                pushToHistory('/date/' + date.id);
                ContentManager.changeContent(PlayPage(date), MAIN_CONTAINER_QUERY)
            });
    },
    USER_MENU: () => {
        fetch(SERVER_URL + '/user-menu')
            .then(response => response.json())
            .then(fullUserData => {
                pushToHistory('/user-menu');
                ContentManager.changeContent(
                    userMenu[fullUserData.role.toUpperCase()](fullUserData),
                    MAIN_CONTAINER_QUERY
                )
            });
    }
}

const ContentManager = {
    changeContent(newNode, queryRootNode) {
        const rootNode = document.querySelector(queryRootNode);
        rootNode.innerHTML = ''
        rootNode.append(newNode);
    },
    roteNewUrl(url) {
        const urlPaths = url.split('/');
        toUrls[urlPaths[1].replace('-', '_').toUpperCase()](urlPaths[2]);
    },
    documentStartRender(rootElement, children) {
        rootElement.innerHTML = "";
        children.forEach(child => rootElement.appendChild(child));
        UserManager.getInstance().getAuthUser();

        let url = getUrlPath(document.URL);
        if (url === '/') url = '/plays'

        this.roteNewUrl(url);
        this._rootNode = rootElement;
        this._childrenElements = children;
    }
}

export const getUrlPath = fullUrl => new URL(fullUrl).pathname;

export default ContentManager