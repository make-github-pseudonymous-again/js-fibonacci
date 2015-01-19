
test( "matrix" , function ( ) {

	var number , i , n , a , b , c , matrix , out ;

	number = require( "aureooms-js-number" ) ;

	n = 45 ;

	matrix = fibonacci.__matrix__( number.zero , number.one , number.mul , number.add ) ;

	a = number.zero( ) ;
	b = number.one( ) ;

	for ( i = 1 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;
		a = b ;
		b = c ;

		out = matrix( i ) ;

		ok( number.eq( out[0] , a ) ) ;
		ok( number.eq( out[1] , b ) ) ;

	}

} ) ;
