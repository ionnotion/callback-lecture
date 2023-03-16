/**
 * Invokes callback function passed on 3rd argument with input1 and input2 as arguments.
 * @param {number} input1 1st input to be passed onto callback.
 * @param {number} input2 2nd input to be passed onto callback.
 * @param {function (number,number)} callback A function that returns the result of mathematical calculation.
 * @return {number} Returns the result of callback function.
 */

function calculation(input1, input2, callback) {
  return callback(input1, input2);
}