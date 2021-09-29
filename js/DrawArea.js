class PixelData {
	/**
	 * @param {number} x タイルのx座標
	 * @param {number} y タイルのy座標
	 * @param {number} w タイルの横幅
	 * @param {number} y タイルの高さ
   */
	constructor(x, y, w, h) {
		this.tiles = [
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
		];
		this.row = 6;
		this.column = 6;
		this.x = x;
		this.y = y;
		this.w = w / this.row;
		this.h = h / this.column;
	}

	show() {
		for (let x = 0; x < this.row; x++) {
			for (let y = 0; y < this.column; y++) {

				push();

				for (let i = 0; i < toolUI.switchAreaContainer.pallet.tileNum; i++) {
					if (this.tiles[y][x] === i) {
						fill(toolUI.switchAreaContainer.pallet.colors[i]);
					}
				}

				const tilePosX = this.x + (x * this.w);
				const tilePosY = this.y + (y * this.h);
				noStroke();
				rect(tilePosX, tilePosY, this.w, this.h);

				pop();
			}
		}
	}
}

class DataUI {
	/**
	 * @param {number} x UIのx座標
   * @param {number} y UIのy座標
   */
	constructor(x, y) {
		this.pixelData = [];
		this.x = x;
		this.y = y;
		this.tileNum = 8;
		this.selectTile = 0;
	}

	set() {
		for (let i = 0; i < this.tileNum; i++) {
			this.pixelData[i] = new PixelData(this.x + i * 50, this.y, 50, 50);
		}
	}

	selected() {
		for (let i = 0; i < this.tileNum; i++) {
			if (
				mouseX > this.pixelData[i].x &&
				mouseX < this.pixelData[i].x + (this.pixelData[i].w * this.pixelData[i].row) &&
				mouseY > this.pixelData[i].y &&
				mouseY < this.pixelData[i].y + (this.pixelData[i].h * this.pixelData[i].column)
			) {
				this.selectTile = i;
			}

			if (this.selectTile === i) {
				const margin = 4;
				push();
				noFill();
				stroke(0, 0, 255);
				strokeWeight(4);
				rect(this.pixelData[i].x, this.pixelData[i].y, (this.pixelData[i].w * this.pixelData[i].row), (this.pixelData[i].h * this.pixelData[i].column));
				pop();
			}
		}
	}

	show() {
		for (let i = 0; i < this.tileNum; i++) {
			this.pixelData[i].show();
		}
	}
}

class DrawArea {
	/**
	 * @param {number} x タイルのx座標
   * @param {number} y タイルのy座標
	 * @param {number} w タイルの横幅
	 * @param {number} y タイルの高さ
   */
	constructor(x, y, w, h) {
		this.tiles = [
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
			[7, 7, 7, 7, 7, 7],
		];
		this.row = 6;
		this.column = 6;
		this.x = x;
		this.y = y;
		this.w = w / this.row;
		this.h = h / this.column;
	}

	draw() {
		for (let x = 0; x < this.row; x++) {
			for (let y = 0; y < this.column; y++) {

				const tilePosX = this.x + (x * this.w);
				const tilePosY = this.y + (y * this.h);

				if (
					mouseX > tilePosX && mouseX < tilePosX + this.w &&
					mouseY > tilePosY && mouseY < tilePosY + this.h
				) {
					for (let i = 0; i < toolUI.switchAreaContainer.pallet.tileNum; i++) {
						if (toolUI.switchAreaContainer.pallet.selectTile === i) {
							this.tiles[y][x] = i;
						}
					}
				}

			}
		}
	}

	show() {
		this.tiles = toolUI.dataUI.pixelData[toolUI.dataUI.selectTile].tiles;

		for (let x = 0; x < this.row; x++) {
			for (let y = 0; y < this.column; y++) {

				push();

				for (let i = 0; i < toolUI.switchAreaContainer.pallet.tileNum; i++) {
					if (this.tiles[y][x] === i) {
						fill(toolUI.switchAreaContainer.pallet.colors[i]);
					}
				}

				const tilePosX = this.x + (x * this.w);
				const tilePosY = this.y + (y * this.h);
				rect(tilePosX, tilePosY, this.w, this.h);

				pop();
			}
		}
	}
}