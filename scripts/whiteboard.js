var WhiteBoard = function(canvas) {
		
	var that = {};

	that.canvas = canvas;

	that.context = canvas.getContext("2d"); 

	that.context.fillStyle = "#000000";

	that.draw = function(x, y, color) {
		that.context.fillStyle = color;
		that.context.fillRect(x - 20, y - 40 , 10, 10);		
	};

	that.clear = function() {
		that.context.fillStyle = "#FFFFFF";		
		that.context.fillRect(0, 0, that.canvas.width, that.canvas.height);
	};

	return that;
};
