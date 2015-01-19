
var __Iter__ = function ( add ) {

	var Iter = function ( a , b ) {

		this.a = a ;
		this.b = b ;

	} ;

	Iter.prototype.next = function ( ) {

		var t ;

		t = this.a ;
		this.a = this.b ;
		this.b = add( t , this.b ) ;

		return { value : t , done : false } ;

	} ;

	return Iter ;

} ;

exports.__Iter__ = __Iter__ ;
