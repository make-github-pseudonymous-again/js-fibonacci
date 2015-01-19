
test( "array" , function ( ) {

	var array , number , i , n , a , fibarray ;

	array = require( "aureooms-js-array" ) ;
	number = require( "aureooms-js-number" ) ;

	n = 46 ;

	a = array.alloc( n + 1 ) ;
	a[0] = number.zero( ) ;
	a[1] = number.one( ) ;

	fibarray = fibonacci.__array__( number.add ) ;

	fibarray( n , a ) ;

	for ( i = 2 ; i <= n ; ++i ) {
		ok( number.eq( a[i] , number.add( a[i-2] , a[i-1] ) ) ) ;
	}

} ) ;
