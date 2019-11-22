"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__rnth__ = __rnth__;

/**
 * @param {inplace adder} iadd
 * @param {zero constructor} zero
 * @param {one constructor} one
 */
function __rnth__(iadd, zero, one) {
  var rnth = function rnth(n) {
    if (n === 0) {
      return zero();
    }

    if (n === 1) {
      return one();
    }

    return iadd(rnth(n - 2), rnth(n - 1));
  };

  return rnth;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ybnRoLmpzIl0sIm5hbWVzIjpbIl9fcm50aF9fIiwiaWFkZCIsInplcm8iLCJvbmUiLCJybnRoIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7OztBQU1PLFNBQVNBLFFBQVQsQ0FBb0JDLElBQXBCLEVBQTJCQyxJQUEzQixFQUFrQ0MsR0FBbEMsRUFBd0M7QUFFOUMsTUFBSUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBV0MsQ0FBWCxFQUFlO0FBRXpCLFFBQUtBLENBQUMsS0FBSyxDQUFYLEVBQWU7QUFDZCxhQUFPSCxJQUFJLEVBQVg7QUFDQTs7QUFFRCxRQUFLRyxDQUFDLEtBQUssQ0FBWCxFQUFlO0FBQ2QsYUFBT0YsR0FBRyxFQUFWO0FBQ0E7O0FBRUQsV0FBT0YsSUFBSSxDQUFFRyxJQUFJLENBQUVDLENBQUMsR0FBRyxDQUFOLENBQU4sRUFBa0JELElBQUksQ0FBRUMsQ0FBQyxHQUFHLENBQU4sQ0FBdEIsQ0FBWDtBQUVBLEdBWkQ7O0FBY0EsU0FBT0QsSUFBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBwYXJhbSB7aW5wbGFjZSBhZGRlcn0gaWFkZFxuICogQHBhcmFtIHt6ZXJvIGNvbnN0cnVjdG9yfSB6ZXJvXG4gKiBAcGFyYW0ge29uZSBjb25zdHJ1Y3Rvcn0gb25lXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcm50aF9fICggaWFkZCAsIHplcm8gLCBvbmUgKSB7XG5cblx0dmFyIHJudGggPSBmdW5jdGlvbiAoIG4gKSB7XG5cblx0XHRpZiAoIG4gPT09IDAgKSB7XG5cdFx0XHRyZXR1cm4gemVybyggKSA7XG5cdFx0fVxuXG5cdFx0aWYgKCBuID09PSAxICkge1xuXHRcdFx0cmV0dXJuIG9uZSggKSA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlhZGQoIHJudGgoIG4gLSAyICkgLCBybnRoKCBuIC0gMSApICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBybnRoIDtcblxufVxuXG4iXX0=