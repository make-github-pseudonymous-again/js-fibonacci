
var __array__ = function ( add ) {

	/**
	 * @param {size} n >= 2
	 * @param {integer array} a initialized to [ zero , one ]
	 */

	var array = function ( n , a ) {

		var i ;

		for ( i = 2 ; i <= n ; ++i ) {
			array[i] = add( array[i-2] , array[i-1] ) ;
		}

		return array[n] ;

	} ;

	return array ;

} ;

exports.__array__ = __array__ ;
