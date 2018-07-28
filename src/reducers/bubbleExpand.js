import { SET_BUBBLE_EXPAND } from '../actions/const';

function reducer(state = [], action) {
  switch (action.type) {

    case SET_BUBBLE_EXPAND: {
      // Add or remove the bubble expand from it
      const index = state.indexOf(action.name);
      const arr = [].concat(state);
      index > -1 ? arr.splice(index, 1) : arr.push(action.name);
      return arr;
    }

    default: {
      // Return original state if no actions were consumed.
      return state;
    }
  }
}

export default reducer;
