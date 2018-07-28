import { SET_PAGE } from '../actions/const';

function reducer(state = "home", action) {
  switch (action.type) {

    case SET_PAGE: {
      return action.name;
    }

    default: {
      // Return original state if no actions were consumed
      return state;
    }
  }
}

export default reducer;
