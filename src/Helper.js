class Helper {
  /**
   * Returns the a shorter version of the value to display
   *
   * @param value The numeric value
   * @param isCurrency True if the number is a currency, false otherwise
   * @param maxDecimals The maximum number of digits to display
   */
  static getDisplayNumber(value, isCurrency, maxDecimals = 1) {
    if(!value && value !== 0) {
      return value;
    }

    let suffix = '';
    if (value >= 1000000) {
      // Add million as suffix if possible
      value /= 1000000;
      suffix = 'M';
    } else if (value >= 1000) {
      // Add thousand as suffix if possible
      value /= 1000;
      suffix = 'k';
    }

    return new Intl.NumberFormat('en-GB',
            {
              style: isCurrency ? 'currency' : 'decimal',
              currency: 'GBP',
              maximumFractionDigits: maxDecimals,
              minimumFractionDigits: 0
            }).format(value) + suffix;
  }
}

export default Helper;
