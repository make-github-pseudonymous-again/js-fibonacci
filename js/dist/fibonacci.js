( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/Iter.js */

var __Iter__ = function ( add ) {

	var Iter = function ( a , b ) {

		this.a = a ;
		this.b = b ;

	} ;

	Iter.prototype.next = function ( ) {

		var t ;

		t = this.a ;
		this.a = this.b ;
		this.b = add( t , this.b ) ;

		return { value : t , done : false } ;

	} ;

	return Iter ;

} ;

exports.__Iter__ = __Iter__ ;

/* js/src/array.js */

var __array__ = function ( add ) {

	/**
	 * @param {size} n >= 2
	 * @param {integer array} a of size n + 1 initialized to [ zero , one , ... ]
	 */

	var array = function ( n , a ) {

		var i ;

		for ( i = 2 ; i <= n ; ++i ) {
			a[i] = add( a[i-2] , a[i-1] ) ;
		}

	} ;

	return array ;

} ;

exports.__array__ = __array__ ;

/* js/src/callback.js */


var __callback__ = function ( iadd , zero , one ) {

	var callback = function ( cb ) {

		var a , b ;

		a = zero( ) ;

		if ( cb( a ) ) return ;

		b = one( ) ;

		if ( cb( b ) ) return ;

		while ( true ) {

			a = iadd( a , b ) ;

			if ( cb( a ) ) return ;

			b = iadd( b , a ) ;

			if ( cb( b ) ) return ;

		}

	} ;

	return callback ;

} ;

exports.__callback__ = __callback__ ;


/* js/src/formula.js */
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
var __formula__ = function ( zero , one , negativeone , add , mul , pow2 , mul2 , mul5 , sub , shu ) {

	/**
	 * @param {nth} n > 0
	 */
	var formula = function ( n ) {

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

		var i , a , b , c , d , w , x , y , z , a2 , b2 , c2 , d2 , w2 , x2 , y2 , z2 ;

		// phi = ( a + bi ) / 2 , psi = ( c + di ) / 2

		a = one( ) ; b = one( ) ;
		c = one( ) ; d = negativeone( ) ;

		w = one( ) ; x = zero( ) ;
		y = one( ) ; z = zero( ) ;

		i = n ;

		while ( true ) {

			if ( i % 2 === 1 ) {

				x2 = add( mul( a , x ) , mul( b , w ) ) ;
				z2 = add( mul( c , z ) , mul( d , y ) ) ;

				if ( i === 1 ) break ;

				w2 = add( mul( a , w ) , mul( mul5( b ) , x ) ) ;
				y2 = add( mul( c , y ) , mul( mul5( d ) , z ) ) ;

				w = w2 ; x = x2 ; y = y2 ; z = z2 ;

			}

			a2 = add( pow2( a ) , mul5( pow2( b ) ) ) ;
			b2 = mul2( mul( a , b ) ) ;

			c2 = add( pow2( c ) , mul5( pow2( d ) ) ) ;
			d2 = mul2( mul( c , d ) ) ;

			a = a2 ; b = b2 ; c = c2 ; d = d2 ;

			i >>>= 1 ;

		}

		return shu( sub( x2 , z2 ) , n ) ;

	} ;

	return formula ;

} ;

exports.__formula__ = __formula__ ;

/* js/src/generator.js */

// waiting for es6

/* js/src/matrix.js */

var __matrix__ = function ( zero , one , mul , add ) {
	/**
	 * @param {nth} n > 0
	 */
	var matrix = function ( n ) {

		// We can compute simultaneously,
		//
		//       a   =      b
		//       b   =  a + b
		//
		// Using matrix multiplication,
		//
		//       X        M
		//       :        :
		//     | a |   | 0 1 |
		//     | b | . | 1 1 |
		//
		// With this we can compute F_{n-1} and F_n using matrix exponentiation
		//
		//                                    n
		//     | F_{n-1} |     | 0 |   | 0 1 |
		//     |   F_n   |  =  | 1 | . | 1 1 |
		//
		// Matrix exponentiation can be achieved in log n steps using the
		// binary decomposition of n
		//
		//     n = ( n % 2 ) * 1 + ( ( n >> 1 ) % 2 ) * 2 + ... + ( ( n >> i ) % 2 ) * ( i + 1 ) + ...
		//
		// And computing M raised to successive powers of 2,
		//
		//                               2
		//            n     /     (n//2) \           (n%2)
		//     | 0 1 |     |  | 0 1 |     |      | 0 1 |
		//     | 1 1 |  =   \ | 1 1 |    /   .   | 1 1 |
		//
		// The matrix is encoded as
		//
		//     | t u |
		//     | v w |

		var a , b , t , u , v , w , a2 , b2 , t2 , u2 , v2 , w2 ;

		a = zero( ) ; b = one( ) ;
		t = zero( ) ; u = one( ) ; v = one( ) ; w = one( ) ;

		while ( true ) {

			if ( n % 2 === 1 ) {

				a2 = add( mul( a , t ) , mul( b , u ) ) ;
				b2 = add( mul( a , v ) , mul( b , w ) ) ;

				a = a2 ; b = b2 ;

				if ( n === 1 ) break ;

			}


			t2 = add( mul( t , t ) , mul( u , v ) ) ;
			u2 = add( mul( t , u ) , mul( u , w ) ) ;
			v2 = add( mul( v , t ) , mul( w , v ) ) ;
			w2 = add( mul( v , u ) , mul( w , w ) ) ;

			t = t2 ; u = u2 ; v = v2 ; w = w2 ;

			n >>>= 1 ;

		}

		return [ a , b ] ;

	} ;

	return matrix ;

} ;

exports.__matrix__ = __matrix__ ;

/* js/src/nth.js */


var __nth__ = function ( iadd , zero , one ) {

	var nth = function ( n ) {

		var a , b ;

		a = zero( ) ;

		if ( n-- === 0 ) return a ;

		b = one( ) ;

		if ( n-- === 0 ) return b ;

		while ( true ) {

			a = iadd( a , b ) ;

			if ( n-- === 0 ) return a ;

			b = iadd( b , a ) ;

			if ( n-- === 0 ) return b ;

		}

	} ;

	return nth ;

} ;

exports.__nth__ = __nth__ ;

/* js/src/rarray.js */

var __rarray__ = function ( add ) {

	/**
	 * @param {size} n >= 0
	 * @param {integer array} a of size n + 1 initialized to [ zero , one , ... ]
	 */

	var rarray = function ( n , a ) {

		if ( a[n] !== undefined ) {
			return a[n] ;
		}

		return ( a[n] = add( rarray( n - 2 , a ) , rarray( n - 1 , a ) ) ) ;

	} ;

	return rarray ;

} ;

exports.__rarray__ = __rarray__ ;

/* js/src/rnth.js */

/**
 * @param {inplace adder} iadd
 * @param {zero constructor} zero
 * @param {one constructor} one
 */

var __rnth__ = function ( iadd , zero , one ) {

	var rnth = function ( n ) {

		if ( n === 0 ) {
			return zero( ) ;
		}

		if ( n === 1 ) {
			return one( ) ;
		}

		return iadd( rnth( n - 2 ) , rnth( n - 1 ) ) ;

	} ;

	return rnth ;

} ;

exports.__rnth__ = __rnth__ ;

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "@aureooms/js-fibonacci" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["fibonacci"] = { } ) ;
}
else console.error( "unable to detect type of module to define for @aureooms/js-fibonacci") ;
} )( ) ;
