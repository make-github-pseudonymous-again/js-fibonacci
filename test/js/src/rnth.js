
test( "rnth" , function ( ) {

	var number , i , n , a , b , c , rnth ;

	number = require( "aureooms-js-number" ) ;

	n = 10 ;

	rnth = fibonacci.__rnth__( number.iadd , number.$0 , number.$1 ) ;

	a = number.$0( ) ;

	ok( number.eq( rnth( 0 ) , a ) ) ;

	b = number.$1( ) ;

	ok( number.eq( rnth( 1 ) , b ) ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;

		ok( number.eq( rnth( i ) , c ) ) ;

		a = b ;
		b = c ;

	}

} ) ;
