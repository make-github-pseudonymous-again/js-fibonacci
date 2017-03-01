import test from 'ava';
import * as number from "@aureooms/js-number" ;

import * as fibonacci from '../../src';

test( "callback" , t => {

	var i , n , a , b , c , callback , cb ;

	callback = fibonacci.__callback__( number.iadd , number.$0 , number.$1 ) ;

	cb = function ( f ) {

		++i ;

		if ( i === n ) return true ;

		if ( i === 0 ) {

			a = number.$0( ) ;

			t.truthy( number.eq( f , a ) ) ;

			return false ;

		}

		if ( i === 1 ) {

			b = number.$1( ) ;

			t.truthy( number.eq( f , b ) ) ;

			return false ;
		}

		c = number.add( a , b ) ;

		t.truthy( number.eq( f , c ) ) ;

		a = b ;
		b = c ;

	} ;

	n = 0 ; i = -1 ; callback( cb ) ;
	n = 1 ; i = -1 ; callback( cb ) ;
	n = 45 ; i = -1 ; callback( cb ) ;
	n = 46 ; i = -1 ; callback( cb ) ;

} ) ;
