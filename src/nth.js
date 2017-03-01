

export function __nth__ ( iadd , zero , one ) {

	var nth = function ( n ) {

		var a , b ;

		a = zero( ) ;

		if ( n-- === 0 ) return a ;

		b = one( ) ;

		if ( n-- === 0 ) return b ;

		while ( true ) {

			a = iadd( a , b ) ;

			if ( n-- === 0 ) return a ;

			b = iadd( b , a ) ;

			if ( n-- === 0 ) return b ;

		}

	} ;

	return nth ;

}

