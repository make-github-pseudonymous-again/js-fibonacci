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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ybnRoLmpzIl0sIm5hbWVzIjpbIl9fcm50aF9fIiwiaWFkZCIsInplcm8iLCJvbmUiLCJybnRoIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPZ0JBLFEsR0FBQUEsUTs7QUFOaEI7Ozs7OztBQU1PLFNBQVNBLFFBQVQsQ0FBb0JDLElBQXBCLEVBQTJCQyxJQUEzQixFQUFrQ0MsR0FBbEMsRUFBd0M7O0FBRTlDLEtBQUlDLE9BQU8sU0FBUEEsSUFBTyxDQUFXQyxDQUFYLEVBQWU7O0FBRXpCLE1BQUtBLE1BQU0sQ0FBWCxFQUFlO0FBQ2QsVUFBT0gsTUFBUDtBQUNBOztBQUVELE1BQUtHLE1BQU0sQ0FBWCxFQUFlO0FBQ2QsVUFBT0YsS0FBUDtBQUNBOztBQUVELFNBQU9GLEtBQU1HLEtBQU1DLElBQUksQ0FBVixDQUFOLEVBQXNCRCxLQUFNQyxJQUFJLENBQVYsQ0FBdEIsQ0FBUDtBQUVBLEVBWkQ7O0FBY0EsUUFBT0QsSUFBUDtBQUVBIiwiZmlsZSI6InJudGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQHBhcmFtIHtpbnBsYWNlIGFkZGVyfSBpYWRkXG4gKiBAcGFyYW0ge3plcm8gY29uc3RydWN0b3J9IHplcm9cbiAqIEBwYXJhbSB7b25lIGNvbnN0cnVjdG9yfSBvbmVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX19ybnRoX18gKCBpYWRkICwgemVybyAsIG9uZSApIHtcblxuXHR2YXIgcm50aCA9IGZ1bmN0aW9uICggbiApIHtcblxuXHRcdGlmICggbiA9PT0gMCApIHtcblx0XHRcdHJldHVybiB6ZXJvKCApIDtcblx0XHR9XG5cblx0XHRpZiAoIG4gPT09IDEgKSB7XG5cdFx0XHRyZXR1cm4gb25lKCApIDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWFkZCggcm50aCggbiAtIDIgKSAsIHJudGgoIG4gLSAxICkgKSA7XG5cblx0fSA7XG5cblx0cmV0dXJuIHJudGggO1xuXG59XG5cbiJdfQ==