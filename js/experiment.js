(function(thx, document, Pouch, undefined){
    var initializationLogger = thx.loggerFor('log');

    var wrapErrorHandlerAround = thx.wrapperWith(initializationLogger);

    initializationLogger.log(Pouch ? "Pouch found" : "Pouch not found");

    Pouch.allDbs(wrapErrorHandlerAround(
	"an error occured while retrieving all database",
	function(response){ initializationLogger.log("found " + response.length + " databases"); }
    ));

    var db = Pouch('events');
})(thx, document, Pouch);
