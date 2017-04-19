

export function __generator__ ( iadd , zero , one ) {

	const generator = function* ( ) {

		let a = zero( ) ;

		yield a;

		let b = one( ) ;

		yield b;

		while ( true ) {

			a = iadd( a , b ) ;

			yield a;

			b = iadd( b , a ) ;

			yield b;

		}

	} ;

	return generator ;

}
