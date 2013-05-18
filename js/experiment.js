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

    var ctx = thx.canvasIn('capture').getContext('2d');

    var map = function map(document){
	if(document.type) {
	    emit(document.type, document);
	}
    }

    try {
	var db = Pouch('events');

	var capture = document.getElementById('capture');
	capture.addEventListener('click', function(event){
	    db.post(clickEventMapper(event));
	});

	db.query({ map: map }, { reduce: false }, function(error, response){
	    if (error) {
		logger.log('querying the database went wrong');
		console.log(error);
		throw error;
	    }
	    var rows = response.rows;
	    for (var index = 0; index < rows.length; index++) {
		var event = rows[index].value;
		ctx.beginPath();
		ctx.arc(event.x, event.y, 2, 0, 360);
		ctx.stroke();
	    }
	});
    } catch(e) {
	logger.log('some thing went wrong')
	console.log(e);
    }
})(thx, document, Pouch);
