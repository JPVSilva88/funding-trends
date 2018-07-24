/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SET_BUBBLE_EXPAND } from '../actions/const';

function reducer(state = [], action) {
  switch (action.type) {

    case SET_BUBBLE_EXPAND: {
      const index = state.indexOf(action.name);
      const arr = [].concat(state);
      index > -1 ? arr.splice(index, 1) : arr.push(action.name);
      return arr;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

export default reducer;
