class MapArea {
	/**
	 * @param {number} x UIのx座標
   * @param {number} y UIのy座標
	 * @param {number} w UIの横幅
   * @param {number} h UIの高さ
   */
	constructor(x, y, w, h) {
		this.pixelData = [
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
			[0, 0, 0, 0, 0, 0 , 0, 0],
		];
		this.row = 8;
		this.column = 8;
		this.x = x;
		this.y = y;
		this.w = w / this.row;
		this.h = h / this.column;
		this.selectTile = [0, 0];
	}
	
	set() {
		
		for (let i = 0; i < this.column; i++) {
			for (let j = 0; j < this.row; j++) {
				this.pixelData[j][i] = new PixelData(this.x + i * this.w, this.y + j * this.h, this.w, this.h);
			}
		}
	}
	
	selected() {
		for (let i = 0; i < this.column; i++) {
			for (let j = 0; j < this.row; j++) {
				if (
					mouseX > this.pixelData[j][i].x &&
					mouseX < this.pixelData[j][i].x + (this.pixelData[j][i].w * this.pixelData[j][i].row) &&
					mouseY > this.pixelData[j][i].y &&
					mouseY < this.pixelData[j][i].y + (this.pixelData[j][i].h * this.pixelData[j][i].column)
					 ) {
					this.pixelData[j][i].tiles = toolUI.dataUI.pixelData[toolUI.dataUI.selectTile].tiles;
					this.selectTile = [j, i];
				}
			}
		}
	}
	
	showSelectArea() {
		for (let i = 0; i < this.column; i++) {
			for (let j = 0; j < this.row; j++) {
				if (this.selectTile[0] === j && this.selectTile[1] === i) {
					push();
					noFill();
					stroke(0, 0, 255);
					strokeWeight(4);
					rect(this.pixelData[j][i].x, this.pixelData[j][i].y, (this.pixelData[j][i].w * this.pixelData[j][i].row), (this.pixelData[j][i].h * this.pixelData[j][i].column));
					pop();
				}
			}
		}
	}
	
	show() {
		for (let i = 0; i < this.column; i++) {
			for (let j = 0; j < this.row; j++) {
				this.pixelData[j][i].show();
				this.showSelectArea();
			}
		}
	}
	
}

