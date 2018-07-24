'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Helper = (function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'getDisplayNumber',

    /**
     * Returns the a shorter version of the value to display
     *
     * @param value The numeric value
     * @param isCurrency True if the number is a currency, false otherwise
     */
    value: function getDisplayNumber(value, isCurrency) {
      var maxDigits = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

      if (!value && value !== 0) {
        return value;
      }

      var suffix = '';
      if (value >= 1000000) {
        // Add million as suffix if possible
        value /= 1000000;
        suffix = 'M';
      } else if (value >= 1000) {
        // Add thousand as suffix if possible
        value /= 1000;
        suffix = 'k';
      }

      return new Intl.NumberFormat('en-GB', {
        style: isCurrency ? 'currency' : 'decimal',
        currency: 'GBP',
        maximumFractionDigits: maxDigits,
        minimumFractionDigits: 0
      }).format(value) + suffix;
    }
  }]);

  return Helper;
})();

exports['default'] = Helper;
module.exports = exports['default'];

//# sourceMappingURL=Helper-compiled.js.map