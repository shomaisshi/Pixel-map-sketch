class SwitchAreaButton {
	constructor(buttonText, x, y, w, h, isSelect) {
		this.buttonText = buttonText;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.c = color(240);
		this.isSelect = isSelect;
	}
	
	selected() {
		if (
			mouseX > this.x &&
			mouseX < this.x + this.w &&
			mouseY > this.y &&
			mouseY < this.y + this.h
			 ) {
			this.isSelect = true;
		}
	}
	
	changeStyle() {
		if (this.isSelect) {
			this.c = color(240);
		} else {
			this.c = color(200);
		}
	}
	
	show() {
		push();
		this.changeStyle();
		fill(this.c);
		rect(this.x, this.y, this.w, this.h);
		fill(0);
		textSize(20);
		text(this.buttonText, this.x + 20, this.y + 35);
		pop();
	}
}