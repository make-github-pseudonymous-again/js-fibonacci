
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
