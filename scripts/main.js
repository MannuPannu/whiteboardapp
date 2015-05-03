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
		
	 	socket.emit('drawing', {
				x: e.clientX,
				y: e.clientY,
				color: context.fillStyle
		});	
	});

	canvas.addEventListener("mousemove", function(e) {
		if(isDrawing) {
			whiteBoard.draw(e.clientX, e.clientY, context.fillStyle);

			socket.emit('drawing', {
					x: e.clientX,
					y: e.clientY,
					color: context.fillStyle
			});	
		}	
	});

	canvas.addEventListener("mouseup", function() {
			isDrawing = false;
	});

	$("#clearButton").on("click", function() {
		socket.emit('clear');
		whiteBoard.clear();
	});
	
	socket.on('drawing', function(msg) {
		whiteBoard.draw(msg.x, msg.y, msg.color);
	});
	
	socket.on('clear', function() {
		whiteBoard.clear();
	});

	//init the color picker
  	$('select[name="colorpicker"]').simplecolorpicker('selectColor', '#7bd148').change(
			function(e) {
				var picker = $(e.target);
				context.fillStyle = picker.val();
			});	

	context.fillStyle = "#7bd148";
};
