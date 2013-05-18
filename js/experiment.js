(function(thx, document, Pouch, undefined){
    var logger = thx.loggerFor('log', 'Experiment');
    var wrapErrorHandlerAround = thx.wrapperWith(logger);

    var clickEventMapper = function(event){
	logger.log('mapping event');
	return {
	    type : event.type,
	    x : event.clientX,
	    y : event.clientY
	}
    }

    try {
	var db = Pouch('events');

	var capture = document.getElementById('capture');
	capture.addEventListener('click', function(event){
	    db.post(clickEventMapper(event));
	});
    } catch(e) {
	logger.log('not initalized correctly')
	console.log(e);
    }
})(thx, document, Pouch);
