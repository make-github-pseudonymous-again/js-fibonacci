
test( "formula" , function ( ) {

	var number , i , n , a , b , c , formula , x ;

	number = require( "@aureooms/js-number" ) ;

	n = 46 ;

	formula = fibonacci.__formula__(
		number.$0 ,
		number.$1 ,
		number.$_1 ,
		number.add ,
		number.mul ,
		number.pow2 ,
		number.mul2 ,
		number.mul5 ,
		number.sub ,
		// number.shu
		function ( a , n ) { return a / Math.pow( 2 , n ) ; }
	) ;

	a = number.$0( ) ;
	b = number.$1( ) ;

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

