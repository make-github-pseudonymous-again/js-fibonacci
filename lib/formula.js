"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__formula__ = __formula__;
/**
 * @param {function} zero number constructor for 0
 * @param {function} one number constructor for 1
 * @param {function} negativeone number constructor for -1
 * @param {function} add number addition binary operator
 * @param {function} mul number multiplication binary operator
 * @param {function} pow2 number squaring unary operator
 * @param {function} mul2 number multiplication by 2 unary operator
 * @param {function} mul5 number multiplication by 5 unary operator
 * @param {function} sub number subtraction binary operator
 * @param {function} shu number right shift binary operator
 */
function __formula__(zero, one, negativeone, add, mul, pow2, mul2, mul5, sub, shu) {

	/**
  * @param {nth} n > 0
  */
	var formula = function formula(n) {

		// The closed form formula for the nth Fibonacci numbers is,
		//
		//      _  ._. n               n
		//       \_|_/            \_|_/
		//         |       ___      |
		//         |                |
		//
		//     ___________________________
		//
		//      _  ._.
		//       \_|_/            \_|_/
		//         |       ___      |
		//         |                |
		//
		// where phi = 1 + sqrt(5) and psi = 1 - sqrt(5)
		//
		//

		var i, a, b, c, d, w, x, y, z, a2, b2, c2, d2, w2, x2, y2, z2;

		// phi = ( a + bi ) / 2 , psi = ( c + di ) / 2

		a = one();b = one();
		c = one();d = negativeone();

		w = one();x = zero();
		y = one();z = zero();

		i = n;

		while (true) {

			if (i % 2 === 1) {

				x2 = add(mul(a, x), mul(b, w));
				z2 = add(mul(c, z), mul(d, y));

				if (i === 1) break;

				w2 = add(mul(a, w), mul(mul5(b), x));
				y2 = add(mul(c, y), mul(mul5(d), z));

				w = w2;x = x2;y = y2;z = z2;
			}

			a2 = add(pow2(a), mul5(pow2(b)));
			b2 = mul2(mul(a, b));

			c2 = add(pow2(c), mul5(pow2(d)));
			d2 = mul2(mul(c, d));

			a = a2;b = b2;c = c2;d = d2;

			i >>>= 1;
		}

		return shu(sub(x2, z2), n);
	};

	return formula;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtdWxhLmpzIl0sIm5hbWVzIjpbIl9fZm9ybXVsYV9fIiwiemVybyIsIm9uZSIsIm5lZ2F0aXZlb25lIiwiYWRkIiwibXVsIiwicG93MiIsIm11bDIiLCJtdWw1Iiwic3ViIiwic2h1IiwiZm9ybXVsYSIsIm4iLCJpIiwiYSIsImIiLCJjIiwiZCIsInciLCJ4IiwieSIsInoiLCJhMiIsImIyIiwiYzIiLCJkMiIsIncyIiwieDIiLCJ5MiIsInoyIl0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsVyxHQUFBQSxXO0FBWmhCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxXQUFULENBQXVCQyxJQUF2QixFQUE4QkMsR0FBOUIsRUFBb0NDLFdBQXBDLEVBQWtEQyxHQUFsRCxFQUF3REMsR0FBeEQsRUFBOERDLElBQTlELEVBQXFFQyxJQUFyRSxFQUE0RUMsSUFBNUUsRUFBbUZDLEdBQW5GLEVBQXlGQyxHQUF6RixFQUErRjs7QUFFckc7OztBQUdBLEtBQUlDLFVBQVUsU0FBVkEsT0FBVSxDQUFXQyxDQUFYLEVBQWU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsQ0FBSixFQUFRQyxDQUFSLEVBQVlDLENBQVosRUFBZ0JDLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3QkMsQ0FBeEIsRUFBNEJDLENBQTVCLEVBQWdDQyxDQUFoQyxFQUFvQ0MsQ0FBcEMsRUFBd0NDLEVBQXhDLEVBQTZDQyxFQUE3QyxFQUFrREMsRUFBbEQsRUFBdURDLEVBQXZELEVBQTREQyxFQUE1RCxFQUFpRUMsRUFBakUsRUFBc0VDLEVBQXRFLEVBQTJFQyxFQUEzRTs7QUFFQTs7QUFFQWYsTUFBSVosS0FBSixDQUFhYSxJQUFJYixLQUFKO0FBQ2JjLE1BQUlkLEtBQUosQ0FBYWUsSUFBSWQsYUFBSjs7QUFFYmUsTUFBSWhCLEtBQUosQ0FBYWlCLElBQUlsQixNQUFKO0FBQ2JtQixNQUFJbEIsS0FBSixDQUFhbUIsSUFBSXBCLE1BQUo7O0FBRWJZLE1BQUlELENBQUo7O0FBRUEsU0FBUSxJQUFSLEVBQWU7O0FBRWQsT0FBS0MsSUFBSSxDQUFKLEtBQVUsQ0FBZixFQUFtQjs7QUFFbEJjLFNBQUt2QixJQUFLQyxJQUFLUyxDQUFMLEVBQVNLLENBQVQsQ0FBTCxFQUFvQmQsSUFBS1UsQ0FBTCxFQUFTRyxDQUFULENBQXBCLENBQUw7QUFDQVcsU0FBS3pCLElBQUtDLElBQUtXLENBQUwsRUFBU0ssQ0FBVCxDQUFMLEVBQW9CaEIsSUFBS1ksQ0FBTCxFQUFTRyxDQUFULENBQXBCLENBQUw7O0FBRUEsUUFBS1AsTUFBTSxDQUFYLEVBQWU7O0FBRWZhLFNBQUt0QixJQUFLQyxJQUFLUyxDQUFMLEVBQVNJLENBQVQsQ0FBTCxFQUFvQmIsSUFBS0csS0FBTU8sQ0FBTixDQUFMLEVBQWlCSSxDQUFqQixDQUFwQixDQUFMO0FBQ0FTLFNBQUt4QixJQUFLQyxJQUFLVyxDQUFMLEVBQVNJLENBQVQsQ0FBTCxFQUFvQmYsSUFBS0csS0FBTVMsQ0FBTixDQUFMLEVBQWlCSSxDQUFqQixDQUFwQixDQUFMOztBQUVBSCxRQUFJUSxFQUFKLENBQVNQLElBQUlRLEVBQUosQ0FBU1AsSUFBSVEsRUFBSixDQUFTUCxJQUFJUSxFQUFKO0FBRTNCOztBQUVEUCxRQUFLbEIsSUFBS0UsS0FBTVEsQ0FBTixDQUFMLEVBQWlCTixLQUFNRixLQUFNUyxDQUFOLENBQU4sQ0FBakIsQ0FBTDtBQUNBUSxRQUFLaEIsS0FBTUYsSUFBS1MsQ0FBTCxFQUFTQyxDQUFULENBQU4sQ0FBTDs7QUFFQVMsUUFBS3BCLElBQUtFLEtBQU1VLENBQU4sQ0FBTCxFQUFpQlIsS0FBTUYsS0FBTVcsQ0FBTixDQUFOLENBQWpCLENBQUw7QUFDQVEsUUFBS2xCLEtBQU1GLElBQUtXLENBQUwsRUFBU0MsQ0FBVCxDQUFOLENBQUw7O0FBRUFILE9BQUlRLEVBQUosQ0FBU1AsSUFBSVEsRUFBSixDQUFTUCxJQUFJUSxFQUFKLENBQVNQLElBQUlRLEVBQUo7O0FBRTNCWixVQUFPLENBQVA7QUFFQTs7QUFFRCxTQUFPSCxJQUFLRCxJQUFLa0IsRUFBTCxFQUFVRSxFQUFWLENBQUwsRUFBc0JqQixDQUF0QixDQUFQO0FBRUEsRUE5REQ7O0FBZ0VBLFFBQU9ELE9BQVA7QUFFQSIsImZpbGUiOiJmb3JtdWxhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB6ZXJvIG51bWJlciBjb25zdHJ1Y3RvciBmb3IgMFxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIG51bWJlciBjb25zdHJ1Y3RvciBmb3IgMVxuICogQHBhcmFtIHtmdW5jdGlvbn0gbmVnYXRpdmVvbmUgbnVtYmVyIGNvbnN0cnVjdG9yIGZvciAtMVxuICogQHBhcmFtIHtmdW5jdGlvbn0gYWRkIG51bWJlciBhZGRpdGlvbiBiaW5hcnkgb3BlcmF0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG11bCBudW1iZXIgbXVsdGlwbGljYXRpb24gYmluYXJ5IG9wZXJhdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwb3cyIG51bWJlciBzcXVhcmluZyB1bmFyeSBvcGVyYXRvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gbXVsMiBudW1iZXIgbXVsdGlwbGljYXRpb24gYnkgMiB1bmFyeSBvcGVyYXRvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gbXVsNSBudW1iZXIgbXVsdGlwbGljYXRpb24gYnkgNSB1bmFyeSBvcGVyYXRvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3ViIG51bWJlciBzdWJ0cmFjdGlvbiBiaW5hcnkgb3BlcmF0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHNodSBudW1iZXIgcmlnaHQgc2hpZnQgYmluYXJ5IG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX2Zvcm11bGFfXyAoIHplcm8gLCBvbmUgLCBuZWdhdGl2ZW9uZSAsIGFkZCAsIG11bCAsIHBvdzIgLCBtdWwyICwgbXVsNSAsIHN1YiAsIHNodSApIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudGh9IG4gPiAwXG5cdCAqL1xuXHR2YXIgZm9ybXVsYSA9IGZ1bmN0aW9uICggbiApIHtcblxuXHRcdC8vIFRoZSBjbG9zZWQgZm9ybSBmb3JtdWxhIGZvciB0aGUgbnRoIEZpYm9uYWNjaSBudW1iZXJzIGlzLFxuXHRcdC8vXG5cdFx0Ly8gICAgICBfICAuXy4gbiAgICAgICAgICAgICAgIG5cblx0XHQvLyAgICAgICBcXF98Xy8gICAgICAgICAgICBcXF98Xy9cblx0XHQvLyAgICAgICAgIHwgICAgICAgX19fICAgICAgfFxuXHRcdC8vICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG5cdFx0Ly9cblx0XHQvLyAgICAgX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cdFx0Ly9cblx0XHQvLyAgICAgIF8gIC5fLlxuXHRcdC8vICAgICAgIFxcX3xfLyAgICAgICAgICAgIFxcX3xfL1xuXHRcdC8vICAgICAgICAgfCAgICAgICBfX18gICAgICB8XG5cdFx0Ly8gICAgICAgICB8ICAgICAgICAgICAgICAgIHxcblx0XHQvL1xuXHRcdC8vIHdoZXJlIHBoaSA9IDEgKyBzcXJ0KDUpIGFuZCBwc2kgPSAxIC0gc3FydCg1KVxuXHRcdC8vXG5cdFx0Ly9cblxuXHRcdHZhciBpICwgYSAsIGIgLCBjICwgZCAsIHcgLCB4ICwgeSAsIHogLCBhMiAsIGIyICwgYzIgLCBkMiAsIHcyICwgeDIgLCB5MiAsIHoyIDtcblxuXHRcdC8vIHBoaSA9ICggYSArIGJpICkgLyAyICwgcHNpID0gKCBjICsgZGkgKSAvIDJcblxuXHRcdGEgPSBvbmUoICkgOyBiID0gb25lKCApIDtcblx0XHRjID0gb25lKCApIDsgZCA9IG5lZ2F0aXZlb25lKCApIDtcblxuXHRcdHcgPSBvbmUoICkgOyB4ID0gemVybyggKSA7XG5cdFx0eSA9IG9uZSggKSA7IHogPSB6ZXJvKCApIDtcblxuXHRcdGkgPSBuIDtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0aWYgKCBpICUgMiA9PT0gMSApIHtcblxuXHRcdFx0XHR4MiA9IGFkZCggbXVsKCBhICwgeCApICwgbXVsKCBiICwgdyApICkgO1xuXHRcdFx0XHR6MiA9IGFkZCggbXVsKCBjICwgeiApICwgbXVsKCBkICwgeSApICkgO1xuXG5cdFx0XHRcdGlmICggaSA9PT0gMSApIGJyZWFrIDtcblxuXHRcdFx0XHR3MiA9IGFkZCggbXVsKCBhICwgdyApICwgbXVsKCBtdWw1KCBiICkgLCB4ICkgKSA7XG5cdFx0XHRcdHkyID0gYWRkKCBtdWwoIGMgLCB5ICkgLCBtdWwoIG11bDUoIGQgKSAsIHogKSApIDtcblxuXHRcdFx0XHR3ID0gdzIgOyB4ID0geDIgOyB5ID0geTIgOyB6ID0gejIgO1xuXG5cdFx0XHR9XG5cblx0XHRcdGEyID0gYWRkKCBwb3cyKCBhICkgLCBtdWw1KCBwb3cyKCBiICkgKSApIDtcblx0XHRcdGIyID0gbXVsMiggbXVsKCBhICwgYiApICkgO1xuXG5cdFx0XHRjMiA9IGFkZCggcG93MiggYyApICwgbXVsNSggcG93MiggZCApICkgKSA7XG5cdFx0XHRkMiA9IG11bDIoIG11bCggYyAsIGQgKSApIDtcblxuXHRcdFx0YSA9IGEyIDsgYiA9IGIyIDsgYyA9IGMyIDsgZCA9IGQyIDtcblxuXHRcdFx0aSA+Pj49IDEgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNodSggc3ViKCB4MiAsIHoyICkgLCBuICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBmb3JtdWxhIDtcblxufVxuXG4iXX0=