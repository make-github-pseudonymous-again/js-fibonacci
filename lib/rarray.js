"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__rarray__ = __rarray__;

function __rarray__(add) {
  /**
   * @param {size} n >= 0
   * @param {integer array} a of size n + 1 initialized to [ zero , one , ... ]
   */
  var rarray = function rarray(n, a) {
    if (a[n] !== undefined) {
      return a[n];
    }

    return a[n] = add(rarray(n - 2, a), rarray(n - 1, a));
  };

  return rarray;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yYXJyYXkuanMiXSwibmFtZXMiOlsiX19yYXJyYXlfXyIsImFkZCIsInJhcnJheSIsIm4iLCJhIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ08sU0FBU0EsVUFBVCxDQUFzQkMsR0FBdEIsRUFBNEI7QUFFbEM7Ozs7QUFLQSxNQUFJQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFXQyxDQUFYLEVBQWVDLENBQWYsRUFBbUI7QUFFL0IsUUFBS0EsQ0FBQyxDQUFDRCxDQUFELENBQUQsS0FBU0UsU0FBZCxFQUEwQjtBQUN6QixhQUFPRCxDQUFDLENBQUNELENBQUQsQ0FBUjtBQUNBOztBQUVELFdBQVNDLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQU9GLEdBQUcsQ0FBRUMsTUFBTSxDQUFFQyxDQUFDLEdBQUcsQ0FBTixFQUFVQyxDQUFWLENBQVIsRUFBd0JGLE1BQU0sQ0FBRUMsQ0FBQyxHQUFHLENBQU4sRUFBVUMsQ0FBVixDQUE5QixDQUFuQjtBQUVBLEdBUkQ7O0FBVUEsU0FBT0YsTUFBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX19yYXJyYXlfXyAoIGFkZCApIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzaXplfSBuID49IDBcblx0ICogQHBhcmFtIHtpbnRlZ2VyIGFycmF5fSBhIG9mIHNpemUgbiArIDEgaW5pdGlhbGl6ZWQgdG8gWyB6ZXJvICwgb25lICwgLi4uIF1cblx0ICovXG5cblx0dmFyIHJhcnJheSA9IGZ1bmN0aW9uICggbiAsIGEgKSB7XG5cblx0XHRpZiAoIGFbbl0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybiBhW25dIDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBhW25dID0gYWRkKCByYXJyYXkoIG4gLSAyICwgYSApICwgcmFycmF5KCBuIC0gMSAsIGEgKSApICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiByYXJyYXkgO1xuXG59XG5cbiJdfQ==