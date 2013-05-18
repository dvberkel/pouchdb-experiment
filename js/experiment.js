(function(thx, document, Pouch, undefined){
    var logger = thx.loggerFor('log', 'Experiment');
    var wrapErrorHandlerAround = thx.wrapperWith(logger);

    try {
	var db = Pouch('events');

    } catch(e) {
	logger.log('not initalized correctly')
    }
})(thx, document, Pouch);
