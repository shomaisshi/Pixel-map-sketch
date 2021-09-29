class ToolUI {
	constructor() {

		// AreaSwitchContainer
		this.switchAreaContainer = new SwitchAreaContainer(0, 0);

		// DataUI
		this.dataUI = new DataUI(0, 550, width, 50);
		this.dataUI.set();
	}

	show() {
		background(170);

		// dataUI
		this.dataUI.selected();
		this.dataUI.show();

		// areaSwitchContainer
		this.switchAreaContainer.show();
	}
}