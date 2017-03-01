
export function __matrix__ ( zero , one , mul , add ) {
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

}

