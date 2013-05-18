(function(thx, Pouch, undefined){
    var logger = thx.loggerFor('log', 'Initialisation');
    var wrapErrorHandlerAround = thx.wrapperWith(logger);

    try {
	logger.log(Pouch ? "Pouch found" : "Pouch not found");

	Pouch.allDbs(wrapErrorHandlerAround(
	    "an error occured while retrieving all database",
	    function(response){
		logger.log("found " + response.length + " databases");
	    }
	));
    } catch(e) {
	logger.log('not initalized correctly')
    }
})(thx, Pouch);
