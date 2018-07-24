import { SET_YEAR } from './const';

function action(name) {
    return { type: SET_YEAR, name };
}

export default action;
