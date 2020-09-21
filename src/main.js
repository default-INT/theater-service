import './css/main.css'
import Header from "./components/header/Header";
import Content from "./components/main-content/Content";
import Footer from "./components/footer/Footer";
import ContentManager, {getUrlPath} from "./managers/ContentManager";
import LoginWindow from "./components/main-content/LoginWindow";
import RegistrationWindow from "./components/main-content/RegistrationWindow";

window.onpopstate = () => {
    ContentManager.roteNewUrl(getUrlPath(document.URL));
}

const root = document.getElementById('root');
ContentManager.documentStartRender(root, [Header, LoginWindow, RegistrationWindow,
    Content, Footer]);