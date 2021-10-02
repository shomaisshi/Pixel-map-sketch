function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	
	layout = new Layout();
	layout.set();
	layout.show();
}

function mousePressed() {
	background(200);
	layout.show();
}

function mouseDragged() {
	background(200);
	layout.show();
}