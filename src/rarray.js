
export function __rarray__ ( add ) {

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

}

