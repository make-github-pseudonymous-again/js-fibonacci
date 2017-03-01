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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yYXJyYXkuanMiXSwibmFtZXMiOlsiX19yYXJyYXlfXyIsImFkZCIsInJhcnJheSIsIm4iLCJhIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsVSxHQUFBQSxVO0FBQVQsU0FBU0EsVUFBVCxDQUFzQkMsR0FBdEIsRUFBNEI7O0FBRWxDOzs7OztBQUtBLEtBQUlDLFNBQVMsU0FBVEEsTUFBUyxDQUFXQyxDQUFYLEVBQWVDLENBQWYsRUFBbUI7O0FBRS9CLE1BQUtBLEVBQUVELENBQUYsTUFBU0UsU0FBZCxFQUEwQjtBQUN6QixVQUFPRCxFQUFFRCxDQUFGLENBQVA7QUFDQTs7QUFFRCxTQUFTQyxFQUFFRCxDQUFGLElBQU9GLElBQUtDLE9BQVFDLElBQUksQ0FBWixFQUFnQkMsQ0FBaEIsQ0FBTCxFQUEyQkYsT0FBUUMsSUFBSSxDQUFaLEVBQWdCQyxDQUFoQixDQUEzQixDQUFoQjtBQUVBLEVBUkQ7O0FBVUEsUUFBT0YsTUFBUDtBQUVBIiwiZmlsZSI6InJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9fcmFycmF5X18gKCBhZGQgKSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c2l6ZX0gbiA+PSAwXG5cdCAqIEBwYXJhbSB7aW50ZWdlciBhcnJheX0gYSBvZiBzaXplIG4gKyAxIGluaXRpYWxpemVkIHRvIFsgemVybyAsIG9uZSAsIC4uLiBdXG5cdCAqL1xuXG5cdHZhciByYXJyYXkgPSBmdW5jdGlvbiAoIG4gLCBhICkge1xuXG5cdFx0aWYgKCBhW25dICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm4gYVtuXSA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggYVtuXSA9IGFkZCggcmFycmF5KCBuIC0gMiAsIGEgKSAsIHJhcnJheSggbiAtIDEgLCBhICkgKSApIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gcmFycmF5IDtcblxufVxuXG4iXX0=