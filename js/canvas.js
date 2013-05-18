(function(thx, document, undefined){
    var extend = function(target, object) {
	for (key in object) {
	    if (!target[key]) {
		target[key] = object[key];
	    }
	}
    };

    var createCanvas = function(id, options){
	var parent = document.getElementById(id);
	var canvas = document.createElement('canvas')
	canvas.setAttribute('width', options.width);
	canvas.setAttribute('height', options.height);
	parent.appendChild(canvas);

	return canvas;
    }

    thx.canvasIn = function(id, options){
	options = options || {};
	extend(options, {
	    width : 640,
	    height : 480
	});
	return createCanvas(id, options);
    };
})(thx, document);
