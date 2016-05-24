function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d");

	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';

	canvas.arc(150,150,80,0,Math.PI,false);
	canvas.stroke();
	
	canvas.beginPath(); //才不會連在一起
	canvas.arc(400,150,80,0,Math.PI,true);
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(150,400,80,0,2*Math.PI,true);
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(400,400,80,0.3*Math.PI,1.2*Math.PI,false);
	canvas.stroke();
}

window.addEventListener('load', doFirst, false);