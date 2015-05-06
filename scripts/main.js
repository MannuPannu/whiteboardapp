window.onload = function() {
	var canvas = document.getElementById("whiteboard");		 
	canvas.width = 1000;
	canvas.height = 750;

	var whiteBoard = WhiteBoard(canvas);
	var context = canvas.getContext("2d"); 

	var isDrawing = false;

	canvas.addEventListener("mousedown", function(e) {
		isDrawing = true;

		whiteBoard.draw(e.clientX, e.clientY, context.fillStyle);
	});

	canvas.addEventListener("mousemove", function(e) {
		if(isDrawing) {
			whiteBoard.draw(e.clientX, e.clientY, context.fillStyle);
		}	
	});

	canvas.addEventListener("mouseup", function() {
			isDrawing = false;
	});
};
