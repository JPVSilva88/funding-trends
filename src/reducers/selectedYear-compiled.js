/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _actionsConst = require('../actions/const');

function reducer(state, action) {
  if (state === undefined) state = /*null*/2017;

  switch (action.type) {

    case _actionsConst.SET_YEAR:
      {
        return action.name;
      }

    default:
      {
        /* Return original state if no actions were consumed. */
        return state;
      }
  }
}

exports['default'] = reducer;
module.exports = exports['default'];

//# sourceMappingURL=selectedYear-compiled.js.map