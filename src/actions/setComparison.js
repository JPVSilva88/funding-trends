import { SET_COMPARISON } from './const';

function action(name) {
    return { type: SET_COMPARISON, name };
}

export default action;
