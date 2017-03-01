import test from 'ava';
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "rnth" , t => {

	var i , n , a , b , c , rnth ;

	n = 10 ;

	rnth = fibonacci.__rnth__( number.iadd , number.$0 , number.$1 ) ;

	a = number.$0( ) ;

	t.truthy( number.eq( rnth( 0 ) , a ) ) ;

	b = number.$1( ) ;

	t.truthy( number.eq( rnth( 1 ) , b ) ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;

		t.truthy( number.eq( rnth( i ) , c ) ) ;

		a = b ;
		b = c ;

	}

} ) ;
