var WhiteBoard = function(canvas) {
		
	var that = {};

	that.canvas = canvas;

	that.context = canvas.getContext("2d"); 

	that.context.fillStyle = "#000000";

	that.context.fillStyle = "#3399FF";

	that.draw = function(x, y) {
		that.context.fillRect(x - 20, y - 40 , 10, 10);		
	};

	return that;
};
