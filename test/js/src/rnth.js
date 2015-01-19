
test( "rnth" , function ( ) {

	var number , i , n , a , b , c , rnth ;

	number = require( "aureooms-js-number" ) ;

	n = 10 ;

	rnth = fibonacci.__rnth__( number.iadd , number.zero , number.one ) ;

	a = number.zero( ) ;

	ok( number.eq( rnth( 0 ) , a ) ) ;

	b = number.one( ) ;

	ok( number.eq( rnth( 1 ) , b ) ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;

		ok( number.eq( rnth( i ) , c ) ) ;

		a = b ;
		b = c ;

	}

} ) ;
