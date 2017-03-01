import test from 'ava';
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "Iter" , t => {

	var Iter , it , i , n , a , b , c ;

	Iter = fibonacci.__Iter__( number.add ) ;

	n = 46 ;

	a = number.$0( ) ;
	b = number.$1( ) ;

	it = new Iter( a , b ) ;

	t.truthy( number.eq( it.next( ).value , a ) , "F0" ) ;
	t.truthy( number.eq( it.next( ).value , b ) , "F1" ) ;

	for ( i = 2 ; i <= n ; ++i ) {

		c = it.next( ).value ;

		t.truthy( number.eq( c , number.add( a , b ) ) , "F" + i ) ;

		a = b ; b = c ;

	}

} ) ;
