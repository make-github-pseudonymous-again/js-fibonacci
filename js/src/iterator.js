
var __iter__ = function ( add ) {

	var iterator = function ( a , b ) {

		this.a = a ;
		this.b = b ;

	} ;

	iterator.prototype.next = function ( ) {

		t = this.a ;
		this.a = this.b ;
		this.b = add( t , this.b ) ;

		return { value : t , done : false } ;

	} ;

	return iterator ;

} ;

exports.__iter__ = __iter__ ;
