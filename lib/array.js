"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__array__ = __array__;
function __array__(add) {

	/**
  * @param {size} n >= 2
  * @param {integer array} a of size n + 1 initialized to [ zero , one , ... ]
  */

	var array = function array(n, a) {

		var i;

		for (i = 2; i <= n; ++i) {
			a[i] = add(a[i - 2], a[i - 1]);
		}
	};

	return array;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcnJheS5qcyJdLCJuYW1lcyI6WyJfX2FycmF5X18iLCJhZGQiLCJhcnJheSIsIm4iLCJhIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLFMsR0FBQUEsUztBQUFULFNBQVNBLFNBQVQsQ0FBcUJDLEdBQXJCLEVBQTJCOztBQUVqQzs7Ozs7QUFLQSxLQUFJQyxRQUFRLFNBQVJBLEtBQVEsQ0FBV0MsQ0FBWCxFQUFlQyxDQUFmLEVBQW1COztBQUU5QixNQUFJQyxDQUFKOztBQUVBLE9BQU1BLElBQUksQ0FBVixFQUFjQSxLQUFLRixDQUFuQixFQUF1QixFQUFFRSxDQUF6QixFQUE2QjtBQUM1QkQsS0FBRUMsQ0FBRixJQUFPSixJQUFLRyxFQUFFQyxJQUFFLENBQUosQ0FBTCxFQUFjRCxFQUFFQyxJQUFFLENBQUosQ0FBZCxDQUFQO0FBQ0E7QUFFRCxFQVJEOztBQVVBLFFBQU9ILEtBQVA7QUFFQSIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9fYXJyYXlfXyAoIGFkZCApIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzaXplfSBuID49IDJcblx0ICogQHBhcmFtIHtpbnRlZ2VyIGFycmF5fSBhIG9mIHNpemUgbiArIDEgaW5pdGlhbGl6ZWQgdG8gWyB6ZXJvICwgb25lICwgLi4uIF1cblx0ICovXG5cblx0dmFyIGFycmF5ID0gZnVuY3Rpb24gKCBuICwgYSApIHtcblxuXHRcdHZhciBpIDtcblxuXHRcdGZvciAoIGkgPSAyIDsgaSA8PSBuIDsgKytpICkge1xuXHRcdFx0YVtpXSA9IGFkZCggYVtpLTJdICwgYVtpLTFdICkgO1xuXHRcdH1cblxuXHR9IDtcblxuXHRyZXR1cm4gYXJyYXkgO1xuXG59XG5cbiJdfQ==