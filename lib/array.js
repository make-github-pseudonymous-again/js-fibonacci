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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcnJheS5qcyJdLCJuYW1lcyI6WyJfX2FycmF5X18iLCJhZGQiLCJhcnJheSIsIm4iLCJhIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNPLFNBQVNBLFNBQVQsQ0FBcUJDLEdBQXJCLEVBQTJCO0FBRWpDOzs7O0FBS0EsTUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBV0MsQ0FBWCxFQUFlQyxDQUFmLEVBQW1CO0FBRTlCLFFBQUlDLENBQUo7O0FBRUEsU0FBTUEsQ0FBQyxHQUFHLENBQVYsRUFBY0EsQ0FBQyxJQUFJRixDQUFuQixFQUF1QixFQUFFRSxDQUF6QixFQUE2QjtBQUM1QkQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT0osR0FBRyxDQUFFRyxDQUFDLENBQUNDLENBQUMsR0FBQyxDQUFILENBQUgsRUFBV0QsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBSCxDQUFaLENBQVY7QUFDQTtBQUVELEdBUkQ7O0FBVUEsU0FBT0gsS0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX19hcnJheV9fICggYWRkICkge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3NpemV9IG4gPj0gMlxuXHQgKiBAcGFyYW0ge2ludGVnZXIgYXJyYXl9IGEgb2Ygc2l6ZSBuICsgMSBpbml0aWFsaXplZCB0byBbIHplcm8gLCBvbmUgLCAuLi4gXVxuXHQgKi9cblxuXHR2YXIgYXJyYXkgPSBmdW5jdGlvbiAoIG4gLCBhICkge1xuXG5cdFx0dmFyIGkgO1xuXG5cdFx0Zm9yICggaSA9IDIgOyBpIDw9IG4gOyArK2kgKSB7XG5cdFx0XHRhW2ldID0gYWRkKCBhW2ktMl0gLCBhW2ktMV0gKSA7XG5cdFx0fVxuXG5cdH0gO1xuXG5cdHJldHVybiBhcnJheSA7XG5cbn1cblxuIl19