class Layout {
	constructor() {
		this.pxielSize = 7;
		this.mapSize = 8;
		this.drawAreaButton = new SwitchAreaButton('Draw', 0, 0, 100, 50, true);
		this.mapAreaButton = new SwitchAreaButton('Map', 100, 0, 100, 50, false);
		this.drawArea = new DrawArea(0, 50, 375, 375, this.pxielSize);
		this.mapArea = new MapArea(0, 50, 375, 375, this.mapSize, this.mapSize, this.pxielSize);
		this.dataUI = new DataUI(0, 525, 375, 100, 8, 2, this.pxielSize);
	}

	set() {
		this.drawArea.set();
		this.mapArea.set();
		this.dataUI.set();
	}

	isDraw(area) {
		if (
			mouseX > area.x &&
			mouseX < area.x + area.w &&
			mouseY > area.y &&
			mouseY < area.y + area.h
		) {
			return true;
		}
	}

	// mapAreaで描画した時、選択しているDataUIのnumを渡す
	updateMapArea() {
		if (this.isDraw(this.mapArea)) {
			this.mapArea.tiles[this.mapArea.selectTile].num = this.dataUI.selectTile;
			const num = this.mapArea.tiles[this.mapArea.selectTile].num;
			for (let i = 0; i < this.drawArea.drawTile.pixels.length; i++) {
				this.mapArea.tiles[this.mapArea.selectTile].pixels[i].colorNum = this.dataUI.tiles[num].pixels[i].colorNum;
			}
		}
	}
	mapAreaShow() {
		// 全てのタイルを描画する
		for (let i = 0; i < this.mapArea.tiles.length; i++) {
			const num = this.mapArea.tiles[i].num;
			for (let j = 0; j < this.drawArea.drawTile.pixels.length; j++) {
				this.mapArea.tiles[i].pixels[j].colorNum = this.dataUI.tiles[num].pixels[j].colorNum;
			}
		}
	}

	// drawAreaで描画した時、選択しているDataUIにデータを渡す
	updateDrawArea() {
		if (this.isDraw(this.drawArea)) {
			// print('updateDrawArea ok');
			for (let i = 0; i < this.drawArea.drawTile.pixels.length; i++) {
				this.dataUI.tiles[this.dataUI.selectTile].pixels[i].colorNum = this.drawArea.drawTile.pixels[i].colorNum;
			}
		}
	}

	// DataUIを選択した時、drawAreaに選択したタイルのデータを渡す
	updateDataUI() {
		if (this.isDraw(this.dataUI)) {
			// print('updateDataUI ok');
			for (let i = 0; i < this.drawArea.drawTile.pixels.length; i++) {
				this.drawArea.drawTile.pixels[i].colorNum = this.dataUI.tiles[this.dataUI.selectTile].pixels[i].colorNum;
			}
		}
	}

	// ボタンクリックでDrawとMapを切り替える
	switchArea() {
		this.drawAreaButton.selected();
		if (this.drawAreaButton.isSelect === true) {
			this.mapAreaButton.isSelect = false;
		}

		this.mapAreaButton.selected();
		if (this.mapAreaButton.isSelect === true) {
			this.mapAreaShow();
			this.drawAreaButton.isSelect = false;
		}
	}

	switchDrawArea() {
		// drawArea
		if (this.drawAreaButton.isSelect === true) {
			this.drawArea.palletShow();
			this.drawArea.show();
			this.updateDrawArea(); // drawAreaで描画した時、選択しているDataUIにデータを渡す
		}
		this.drawAreaButton.show();
	}

	switchMapArea() {
		// mapArea
		if (this.mapAreaButton.isSelect === true) {
			this.mapArea.selected();
			this.updateMapArea();
			this.mapArea.show();
			this.mapArea.selectedAreaShow();
		}
		this.mapAreaButton.show();
	}

	show() {
		// タイルを選択して、そのデータをdrawAreaに渡す
		this.dataUI.selected();
		this.updateDataUI();

		// ボタンクリックでDrawとMapを切り替える
		this.switchArea();

		// drawAreaを表示する
		this.switchDrawArea();

		// mapAreaを表示する
		this.switchMapArea();

		// DataUIを表示する
		this.dataUI.show();
		this.dataUI.borderShow();
		this.dataUI.selectedAreaShow();
	}
}