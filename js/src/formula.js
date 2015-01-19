/**
 * @param {function} zero number constructor for 0
 * @param {function} one number constructor for 1
 * @param {function} minusone number constructor for -1
 * @param {number} five constant number reference constructor for 5
 * @param {function} add number addition binary operator
 * @param {function} mul number multiplication binary operator
 * @param {function} sqr number squaring unary operator
 * @param {function} mul2 number multiplication by 2 unary operator
 * @param {function} sub number subtraction binary operator
 * @param {function} shr number right shift binary operator
 */
var __formula__ = function ( zero , one , minusone , five , add , mul , shr , sqr , mul2 ) {

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

		var i , a , b , c , d , w , x , y , z , w2 , x2 , y2 , z2 ;

		// phi = ( a + bi ) / 2 , psi = ( c + di ) / 2

		a = one( ) ; b = one( ) ;
		c = one( ) ; d = minusone( ) ;

		w = one( ) ; x = zero( ) ;
		y = one( ) ; z = zero( ) ;

		i = n ;

		while ( true ) {

			if ( i % 2 === 1 ) {

				x2 = add( mul( a , x ) , mul( b , w ) ) ;
				z2 = add( mul( c , z ) , mul( d , y ) ) ;

				if ( i === 1 ) break ;

				w2 = add( mul( a , w ) , mul( mul( five , b ) , x ) ) ;
				y2 = add( mul( c , y ) , mul( mul( five , d ) , z ) ) ;

				w = w2 ; x = x2 ; y = y2 ; z = z2 ;

			}

			a2 = add( sqr( a ) , mul( five , sqr( b ) ) ) ;
			b2 = mul2( mul( a , b ) ) ;

			c2 = add( sqr( c ) , mul( five , sqr( d ) ) ) ;
			d2 = mul2( mul( c , d ) ) ;

			a = a2 ; b = b2 ; c = c2 ; d = d2 ;

			i >>>= 1 ;

		}

		return shr( sub( x2 , z2 ) , n ) ;

	} ;

	return formula ;

} ;

exports.__formula__ = __formula__ ;
