class ToolUI {
	constructor() {
		
		// AreaSwitchContainer
		this.switchAreaContainer = new SwitchAreaContainer(0, 0);
		
		// DataUI
		this.dataUI = new DataUI(0, 550);
		this.dataUI.set();
	}
	
	show() {
		background(170);
		
		// areaSwitchContainer
		this.switchAreaContainer.show();
		
		// dataUI
		this.dataUI.show();
		this.dataUI.selected();
	}
}