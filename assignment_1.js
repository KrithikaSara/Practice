//Play board class

var PlayBoarrd  = function (/*could take some base config as param TODO*/) {
	
	//sudo constructor
	this.config = {}
	
	// local varible not accesses via 'this'
	var DefaultConfig = {
		rows: 5,
		cols: 5,
		coinPosition:[3,3],
		mainBoxHeight: document.getElementsByClassName("mainBox")[0].clientHeight,
		mainBoxWidth: document.getElementsByClassName("mainBox")[0].clienttWidth
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

	function buildBoard(param1){
		var root = param1.container;
		var cell;

		for(var i=0;i<param1.rows;i++){
			for(var j=0;j<param1.cols;j++){
				var newWidth = param1.mainBoxWidth/param1.cols;
				var newHeight = param1.mainBoxHeight/param1.rows;
				cell = buildCell(newWidth,newHeight);
				root.appendChild(cell);
			}
		}
	}

	function init(param) {
		if(!param || !param.container){
			throw "container is mandatory config for play playBoarrd";
		}
		//merge both configs
		//copy DefaultConfig values for the missing keys in 'config'
		this.config = Object.assign({},param, DefaultConfig)
		buildBoard(this.config);
	}
	return {
		init : init
	}
}

var Circle = function(param2) {

	this.circleconfig = param2;
	
	var circleElement = document.createElement('div');
    element.style.color = this.circleElement.color;
    element.style.height = this.circleElement.radius * 2;
	element.style.width = this.circleElement.radius * 2;
    element.style.border-radius = 50%;
    element.className= 'miniCircle';
    return element;
}

var board= new PlayBoarrd();
board.init({
	container: document.getElementsByClassName("mainBox")[0],
	coin: new Circle({
		radius: 5,
		colour: "#D32F2F";
	  })
	});


/*var circle = function (somethingStupidConfigAsParam){

this.objectScopeConfig = somethingStupidConfigAsParam;

var element = document.createElement('div');
element.style.color = this.objectScopeConfig.colour
//find how to make a div into circle in google
element.className = 'miniCircle';
return element;
}*/
