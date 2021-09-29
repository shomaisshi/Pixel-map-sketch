class ColorTile {
	/**
   * @param {number} c タイルの色
	 * @param {number} x タイルのx座標
   * @param {number} y タイルのy座標
	 * @param {number} w タイルの横幅
	 * @param {number} y タイルの高さ
   */
	constructor(c, x, y, w, h) {
		this.c = c;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	show() {
		push();
		fill(this.c);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}

class Pallet {
	/**
   * @param {number} x パレットのx座標
   * @param {number} y パレットのy座標
   */
	constructor(x, y, w, h) {
		this.tiles = [];
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.tileWidth = this.w / 8;
		this.tileHeight = this.h;
		this.selectTile = 3;
		this.tileNum = 16;
		this.colors = [
			color('#000000'),
			color('#1D2B53'),
			color('#7E2553'),
			color('#008751'),
			color('#AB5236'),
			color('#5F574F'),
			color('#C2C3C7'),
			color('#FFF1E8'),
			color('#FF004D'),
			color('#FFA300'),
			color('#FFEC27'),
			color('#00E436'),
			color('#29ADFF'),
			color('#83769C'),
			color('#FF77A8'),
			color('#FFCCAA'),
		];
	}

	set() {
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 8; j++) {
				this.tiles.push(new ColorTile(this.colors[(i * 8) + j], this.x + (j * this.tileWidth), this.y + (i * this.tileHeight), this.tileWidth, this.tileHeight));
			}
		}
	}

	selected() {
		for (let i = 0; i < this.tiles.length; i++) {
			if (
				mouseX > this.tiles[i].x &&
				mouseX < this.tiles[i].x + this.tiles[i].w &&
				mouseY > this.tiles[i].y &&
				mouseY < this.tiles[i].y + this.tiles[i].h
			) {
				this.selectTile = i;
			}
		}
	}

	showUI() {
		for (let i = 0; i < this.tiles.length; i++) {
			this.tiles[i].show();

			if (this.selectTile === i) {
				const margin = 4;
				push();
				fill(50);
				rect(this.tiles[i].x, this.tiles[i].y, this.tiles[i].w, this.tiles[i].h);
				fill(this.colors[i]);
				rect(this.tiles[i].x + margin, this.tiles[i].y + margin, this.tiles[i].w - (margin * 2), this.tiles[i].h - (margin * 2));
				pop();
			}
		}

	}
}

