import test from 'ava';
import * as array from "@aureooms/js-array" ;
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "rarray" , t => {

	var i , n , a , rarray , f ;

	n = 46 ;

	a = array.alloc( n + 1 ) ;
	a[0] = number.$0( ) ;
	a[1] = number.$1( ) ;

	rarray = fibonacci.__rarray__( number.add ) ;

	f = rarray( n , a ) ;

	for ( i = 2 ; i <= n ; ++i ) {
		t.truthy( number.eq( a[i] , number.add( a[i-2] , a[i-1] ) ) ) ;
	}

	t.truthy( number.eq( f , a[n] ) , "check returned value" ) ;

} ) ;
