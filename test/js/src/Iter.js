
test( "Iter" , function ( ) {

	var number , Iter , it , i , n , a , b , c ;

	number = require( "aureooms-js-number" ) ;

	Iter = fibonacci.__Iter__( number.add ) ;

	n = 46 ;

	a = number.zero( ) ;
	b = number.one( ) ;

	it = new Iter( a , b ) ;

	ok( number.eq( it.next( ).value , a ) , "F0" ) ;
	ok( number.eq( it.next( ).value , b ) , "F1" ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = it.next( ).value ;

		ok( number.eq( c , number.add( a , b ) ) , "F" + i ) ;

		a = b ; b = c ;

	}

} ) ;
