//Play board class

var PlayBoarrd  = function (/*could take some base config as param TODO*/) {
	
	//sudo constructor
	this.config = {}
	
	// local varible not accesses via 'this'
	var DefaultConfig = {
		rows: 5,
		cols: 5,
		coinPosition:[3,3],
		cellWidth:20,
		cellHeight:20
	}
	
	//local(private) functions that are available within the calss
	//but not accessed via 'this' scope
	function buildCell(width,height) {
		var element = document.createElement('div');
		element.style.width = `${width}px`;
		element.style.height = `${height}px`;
		element.className = 'miniBoxes';
		return  element;
	}

	function buildBoard(config){
		var root = config.container;
		var cell;

		for(var i=0;i<config.rows;i++){
			for(var i=0;i<config.cols;i++){
				cell = buildCell(config.cellWidth,config.cellHeight);
				root.appendChild(cell);
			}
		}
	}

	function init(config) {
		if(!config || !config.container){
			throw "container is mandatory config for play playBoarrd";
		}
		//merge both configs
		//copy DefaultConfig values for the missing keys in 'config'
		this.config = Object.assign(config , DefaultConfig)
		buildBoard(this.config);
	}
	return {
		init : init
	}
}