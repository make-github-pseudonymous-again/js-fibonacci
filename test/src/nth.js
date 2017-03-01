import test from 'ava';
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "nth" , t => {

	var i , n , a , b , c , nth ;

	n = 46 ;

	nth = fibonacci.__nth__( number.iadd , number.$0 , number.$1 ) ;

	a = number.$0( ) ;

	t.truthy( number.eq( nth( 0 ) , a ) ) ;

	b = number.$1( ) ;

	t.truthy( number.eq( nth( 1 ) , b ) ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;

		t.truthy( number.eq( nth( i ) , c ) ) ;

		a = b ;
		b = c ;

	}

} ) ;
