/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SET_CHARITY } from '../actions/const';

function reducer(state = /*null*/"ZING", action) {
  switch (action.type) {

    case SET_CHARITY: {
      return action.name;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

export default reducer;
