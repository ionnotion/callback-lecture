class Calculator {
  /**
   * Invokes callback function passed on 3rd argument with input1 and input2 as arguments.
   * @param {number} a 1st input to be passed onto callback.
   * @param {number} b 2nd input to be passed onto callback.
   * @param {function (number,number)} callback A function that returns the result of mathematical calculation.
   * @return {number} Returns the result of callback function.
   */
  static calculation(a, b, callback) {
    return callback(a, b);
  }

  static sum(a, b) {
    return a + b;
  }
}

//masukkan argumen untuk VVV invocation dibawah 
Calculator.calculation();
//masukkan argumen untuk ^^^ invocation diatas