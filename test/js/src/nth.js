
test( "nth" , function ( ) {

	var number , i , n , a , b , c , nth ;

	number = require( "aureooms-js-number" ) ;

	n = 46 ;

	nth = fibonacci.__nth__( number.iadd , number.zero , number.one ) ;

	a = number.zero( ) ;

	ok( number.eq( nth( 0 ) , a ) ) ;

	b = number.one( ) ;

	ok( number.eq( nth( 1 ) , b ) ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;

		ok( number.eq( nth( i ) , c ) ) ;

		a = b ;
		b = c ;

	}

} ) ;
