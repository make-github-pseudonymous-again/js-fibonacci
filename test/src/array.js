import test from 'ava';
import {alloc} from "@aureooms/js-array" ;
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "array" , t => {

	var i , n , a , fibarray ;

	n = 46 ;

	a = alloc( n + 1 ) ;
	a[0] = number.$0( ) ;
	a[1] = number.$1( ) ;

	fibarray = fibonacci.__array__( number.add ) ;

	fibarray( n , a ) ;

	for ( i = 2 ; i <= n ; ++i ) {
		t.truthy( number.eq( a[i] , number.add( a[i-2] , a[i-1] ) ) ) ;
	}

} ) ;
