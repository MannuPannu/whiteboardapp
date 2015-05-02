window.onload = function() {

	var socket = io();
	var canvas = document.getElementById("whiteboard");		 

	//init the color picker
  	$('select[name="colorpicker"]').simplecolorpicker('selectColor', '#7bd148').change(
			function(e) {
				var picker = $(e.target);
				context.fillStyle = picker.val();
			});	

	//init canvas size
	canvas.width = 1000;
	canvas.height = 750;
	
	var context = canvas.getContext("2d");

	context.fillStyle = "#000000";

	context.fillStyle = "#3399FF";

	var isDrawing = false;

	canvas.addEventListener("mousedown", function(e) {
		isDrawing = true;
		draw(e.clientX, e.clientY);	
	});

	canvas.addEventListener("mousemove", function(e) {
		if(isDrawing) {
			draw(e.clientX, e.clientY);
		}	
	});

	canvas.addEventListener("mouseup", function() {
			isDrawing = false;
	});
	
	function draw(x, y) {
		context.fillRect(x - 15, y - 30 , 10, 10);		
	
	 	socket.emit('drawing', {
				x: x - 15,
				y: y - 30
		});	
	};

	socket.on('drawing', function(msg) {
		context.fillRect(msg.x, msg.y, 10, 10);
	});
};
