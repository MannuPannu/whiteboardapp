window.onload = function() {
    var socket = io();

	var canvas = document.getElementById("whiteboard");		 
	canvas.width = 1000;
	canvas.height = 750;

	var whiteBoard = WhiteBoard(canvas);
	var context = canvas.getContext("2d"); 


	var isDrawing = false;

	canvas.addEventListener("mousedown", function(e) {
		isDrawing = true;

		whiteBoard.draw(e.clientX, e.clientY, context.fillStyle);

	    socket.emit('drawing', { x: e.clientX, y: e.clientY });
	});

	canvas.addEventListener("mousemove", function(e) {
		if(isDrawing) {
			whiteBoard.draw(e.clientX, e.clientY, context.fillStyle);
	        socket.emit('drawing', { x: e.clientX, y: e.clientY });
		}	
	});

	canvas.addEventListener("mouseup", function() {
			isDrawing = false;
	});


    //socket events here
	socket.on('drawing', function (obj) {
		whiteBoard.draw(obj.x, obj.y, context.fillStyle);
    });
};
