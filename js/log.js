(function(thx, document, undefined){
    var Logger = function(id, name) {
	var container = document.createElement('div');
	var header = document.createElement('h3');
	header.textContent = name;
	container.appendChild(header);
	var ul = document.createElement('ul');
	container.appendChild(ul);
	document.getElementById(id).appendChild(container);

	var timestamp = thx.timestampFactory();

	this.log = function(message){
	    var li = document.createElement('li');
	    li.textContent = timestamp() + ": " + message;
	    ul.appendChild(li);
	}
    };

    thx.loggerFor = function(id, name){
	var logger = new Logger(id, name || '?');
	logger.log('Logger created');
	return logger;
    };
})(thx, document);
