
test( "callback" , function ( ) {

	var number , i , n , a , b , c , callback , cb ;

	number = require( "aureooms-js-number" ) ;

	callback = fibonacci.__callback__( number.iadd , number.zero , number.one ) ;

	cb = function ( f ) {

		++i ;

		if ( i === n ) return true ;

		if ( i === 0 ) {

			a = number.zero( ) ;

			ok( number.eq( f , a ) ) ;

			return false ;

		}

		if ( i === 1 ) {

			b = number.one( ) ;

			ok( number.eq( f , b ) ) ;

			return false ;
		}

		c = number.add( a , b ) ;

		ok( number.eq( f , c ) ) ;

		a = b ;
		b = c ;

	} ;

	n = 0 ; i = -1 ; callback( cb ) ;
	n = 1 ; i = -1 ; callback( cb ) ;
	n = 45 ; i = -1 ; callback( cb ) ;
	n = 46 ; i = -1 ; callback( cb ) ;

} ) ;
