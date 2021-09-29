let toolUI;

function setup() {
	createCanvas(375, windowHeight);
	background(170);

	toolUI = new ToolUI();
	toolUI.show();
}

function mousePressed() {
	toolUI.show();
}

function mouseDragged() {
	toolUI.show();
}
