import { SET_PAGE } from './const';

function action(name) {
    return { type: SET_PAGE, name };
}

export default action;
