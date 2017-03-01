
/**
 * @param {inplace adder} iadd
 * @param {zero constructor} zero
 * @param {one constructor} one
 */

export function __rnth__ ( iadd , zero , one ) {

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

}

