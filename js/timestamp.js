(function(thx){
    var currentTime = function(){ return (new Date()).getTime(); };
    var factory = function factory(){
	var start = currentTime();
	return function timestamp() {
	    return currentTime() - start;
	}
    };
    thx.timestampFactory = factory;
})(thx);
