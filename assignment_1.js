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
		mainBoxWidth: document.getElementsByClassName("mainBox")[0].clientWidth
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

	function positionPiece(x,y){
		//1 find the existing coin position
		//2 then remove it
		//2a if you dont find the coin, then place it in default position
		//3 find the new coordinates
		//4 place the coin in new position
	
			return DefaultConfig.rows*(x-1)+y;
	}

	function buildPiece(){
		positionPiece.apply(this,DefaultConfig.coinPosition)
	//	var defaultPosition = container.childNodes[13];
	//	defaultPosition.appendChild(element);
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
		buildPiece.apply(this);
	} 

	/*function start(param3){
		var startConfig = Object.assign ({},DefaultConfig)
		var findMiddleCell = Math.ceil((startConfig.rows*startConfig.columns)/2);
		
	}*/
	return {
		init : init
	}
}

var Circle = function(param2) {

	this.circleconfig = param2;
	
	var circleElement = document.createElement('div');

    circleElement.style.borderColor = this.circleconfig.color;
    circleElement.style.height = this.circleconfig.radius * 2;
	circleElement.style.width = this.circleconfig.radius * 2;
    circleElement.style.borderRadius = "50%";
    circleElement.className= 'circle';
    return circleElement;
}

var board= new PlayBoarrd();
board.init({
	container: document.getElementsByClassName("mainBox")[0],
	coin: new Circle({
		radius: 20,
		colour: "#D32F2F"
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
