(function(thx, document, undefined){
    var Logger = function(id) {
	var ul = document.createElement('ul');
	document.getElementById(id).appendChild(ul);

	var timestamp = thx.timestampFactory();

	this.log = function(message){
	    var li = document.createElement('li');
	    li.textContent = timestamp() + ": " + message;
	    ul.appendChild(li);
	}
    };

    thx.loggerFor = function(id){
	var logger = new Logger(id);
	logger.log('Logger created');
	return logger;
    };
})(thx, document);
