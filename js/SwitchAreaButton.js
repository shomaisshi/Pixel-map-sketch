class SwitchAreaButton {
	constructor(buttonText, x, y, w, h, c, isSelect) {
		this.buttonText = buttonText;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.c = c;
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

	show() {
		push();
		noStroke();
		fill(this.c);
		rect(this.x, this.y, this.w, this.h);
		fill(0);
		textSize(20);
		text(this.buttonText, this.x + 20, this.y + 35);
		pop();
	}
}

class SwitchAreaContainer {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.drawAreaButton = new SwitchAreaButton('Draw', this.x, this.y, 100, 50, color(240), true);
		this.mapAreaButton = new SwitchAreaButton('Map', this.x + 100, this.y, 100, 50, color(200), false);

		// drawArea
		this.drawArea = new DrawArea(0, 50, width, width);

		// mapArea
		this.mapArea = new MapArea(0, 50, width, width);
		this.mapArea.set();

		// ColorPalletUI
		this.pallet = new Pallet(0, 450, width, 50);
		this.pallet.set();
	}

	update() {
		this.drawAreaButton.selected();
		if (this.drawAreaButton.isSelect === true) {
			this.mapAreaButton.isSelect = false;
			this.mapAreaButton.c = color(200);
		}

		this.mapAreaButton.selected();
		if (this.mapAreaButton.isSelect === true) {
			this.drawAreaButton.isSelect = false;
			this.drawAreaButton.c = color(200);
		}
	}

	show() {
		this.update();

		// drawArea
		if (this.drawAreaButton.isSelect === true) {
			this.drawArea.draw();
			this.drawArea.show();
			this.drawAreaButton.c = color(240);

			// ColorPalletUI
			this.pallet.selected();
			this.pallet.showUI();
		}

		this.drawAreaButton.show();

		// mapArea
		if (this.mapAreaButton.isSelect === true) {
			this.mapArea.selected();
			this.mapArea.show();
			this.mapAreaButton.c = color(240);
		}

		this.mapAreaButton.show();
	}
}