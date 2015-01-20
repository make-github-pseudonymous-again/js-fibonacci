
test( "formula" , function ( ) {

	var number , i , n , a , b , c , formula , x ;

	number = require( "aureooms-js-number" ) ;

	n = 46 ;

	formula = fibonacci.__formula__(
		number.zero ,
		number.one ,
		number.negativeone ,
		number.five( ) ,
		number.add ,
		number.mul ,
		number.pow2 ,
		number.mul2 ,
		number.sub ,
		// number.shu
		function ( a , n ) { return a / Math.pow( 2 , n ) ; }
	) ;

	a = number.zero( ) ;
	b = number.one( ) ;

	x = formula( 1 ) ;

	ok( number.eq( x , b ) , "1 is " + b + " , got " + x ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;

		x = formula( i ) ;

		ok( number.eq( x , c ) , i + " is " + b + " , got " + x ) ;

		a = b ;
		b = c ;

	}

} ) ;

