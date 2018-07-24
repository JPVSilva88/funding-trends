import { SET_CHARITY } from './const';

function action(name) {
    return { type: SET_CHARITY, name };
}

export default action;
