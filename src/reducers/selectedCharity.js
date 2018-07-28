import { SET_CHARITY } from '../actions/const';

function reducer(state = null, action) {
  switch (action.type) {

    case SET_CHARITY: {
      return action.name;
    }

    default: {
      // Return original state if no actions were consumed
      return state;
    }
  }
}

export default reducer;
