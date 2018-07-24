'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _setCharityDataJs = require('./setCharityData.js');

var _setCharityDataJs2 = _interopRequireDefault(_setCharityDataJs);

//import ccAPI from 'charity-commission-api';

//const APIKey = 'b3400e03-dc6e-46ac-9';

function action(charityNumber) {
    return charityNumber;
    /*return function (dispatch) {
        console.info("here");
        return ccAPI.GetCharityByRegisteredCharityNumber(
            {APIKey: APIKey, registeredCharityNumber: charityNumber})
            .then((response) => {console.info("here"); response.json();})
            .then((responseJson) => {
                console.info(responseJson);
                dispatch(setCharityData(responseJson));
            });
    };*/
}

exports['default'] = action;
module.exports = exports['default'];

//# sourceMappingURL=getCharityData-compiled.js.map