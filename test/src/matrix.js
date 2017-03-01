import test from 'ava';
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "matrix" , t => {

	var i , n , a , b , c , matrix , out ;

	n = 45 ;

	matrix = fibonacci.__matrix__( number.$0 , number.$1 , number.mul , number.add ) ;

	a = number.$0( ) ;
	b = number.$1( ) ;

	for ( i = 1 ; i <= n ; ++i ) {

		c = number.add( a , b ) ;
		a = b ;
		b = c ;

		out = matrix( i ) ;

		t.truthy( number.eq( out[0] , a ) ) ;
		t.truthy( number.eq( out[1] , b ) ) ;

	}

} ) ;
