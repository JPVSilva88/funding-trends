/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SET_COMPARISON } from '../actions/const';

function reducer(state = null, action) {
  switch (action.type) {

    case SET_COMPARISON: {
      return action.name;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

export default reducer;