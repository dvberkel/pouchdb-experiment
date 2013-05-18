(function(thx, document, Pouch, undefined){
    thx.wrapperWith = function(logger) {
	return function(reason, callback){
	    return function(error, response) {
		if (error) {
		    logger.log(reason);
		    console.log(error);
		    throw error;
		}
		callback.call(this, response);
	    };
	};
    };
})(thx, document, Pouch);
