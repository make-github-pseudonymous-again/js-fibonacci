import test from 'ava';
import * as number from '@aureooms/js-number' ;
import { range } from '@iterable-iterator/range' ;

import * as fibonacci from '../../src';

test( 'generator' , t => {

	const generator = fibonacci.__generator__( number.iadd , number.$0 , number.$1 ) ;

	const f = generator();

	const n = 47;

	let a, b, c;

	for (let i of range(n)) {


		if ( i === 0 ) {

			a = number.$0( ) ;

			t.truthy( number.eq( f.next().value , a ) ) ;

		}

		else if ( i === 1 ) {

			b = number.$1( ) ;

			t.truthy( number.eq( f.next().value , b ) ) ;

		}

		else {

			c = number.add( a , b ) ;

			t.truthy( number.eq( f.next().value , c ) ) ;

			a = b ;
			b = c ;

		}

	} ;

} ) ;
