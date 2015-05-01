window.onload = function() {
	var canvas = document.getElementById("whiteboard");		 
	
	var context = canvas.getContext("2d");

	context.fillStyle = "#000000";

	context.fillStyle = "#333333";
	context.fillRect(10, 10, 20, 20);
};
