import {node} from "../../util";
import Loader from "./Loader";


export default node({
    type: 'section',
    id: 'content',
    children: node({
        type: 'main',
        id: 'main-container',
        // onload: () => ContentManager.roteNewUrl('/plays'),
        children: Loader //Loader
    })
});