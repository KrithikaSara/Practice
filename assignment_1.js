//Play board class

var PlayBoarrd  = function (/*could take some base config as param TODO*/) {
    
    //sudo constructor
    this.config = {}
    
    // local varible not accesses via 'this'
    var DefaultConfig = {
        rows: 5,
        cols: 5,
        coinPosition:[3,3],
        mainBoxHeight: null,
        mainBoxWidth: null 
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

        if (x>DefaultConfig.rows || y>DefaultConfig.cols)
        console.log(`The limit is [${DefaultConfig.rows},${DefaultConfig.cols}]`);
        else{
        var newPosition = DefaultConfig.rows*(x-1)+y;
        var findCircle = this.config.container.getElementsByClassName("circle")[0];
        
        if (findCircle){
            var parent = findCircle.parentNode;
            parent.removeChild(findCircle);
        }  
        
        this.config.container.childNodes[newPosition].appendChild(this.config.coin.circleElement);
        }
    } 


    function findCircle1(){
        var findCircle = this.config.container.getElementsByClassName("circle")[0];
        var parent = findCircle.parentNode;
        var index = Array.prototype.indexOf.call(this.config.container.children, parent);
        return index;
    }

    function up(){

       var position = findCircle1.apply(this);
       var x = Math.floor(position/DefaultConfig.rows);
       var y = (position%DefaultConfig.rows)+1;
       if (x<1) 
        console.log("Cannot move up");
        else
       positionPiece.call(this,x,y);
    }

    function down(){
        var position = findCircle1.apply(this);
        if ((position%DefaultConfig.rows)===0)
        var x = Math.ceil(position/DefaultConfig.rows)+2;
        else
       var x = Math.ceil(position/DefaultConfig.rows)+1;

       var y = (position%DefaultConfig.rows)+1;
       if (x>DefaultConfig.rows) 
        console.log("Cannot move down");
       else
        positionPiece.call(this,x,y);
    }
    function left(){
        var position = findCircle1.apply(this);
       var x = Math.ceil(position/DefaultConfig.rows);
       var y = (position%DefaultConfig.rows);
       if (y<1)
        console.log("Cannot move left");
       else
        positionPiece.call(this,x,y);
    }
    function right(){
        var position = findCircle1.apply(this);
        if ((position%DefaultConfig.rows)===0)
            var x = Math.ceil(position/DefaultConfig.rows)+1;
        else
       var x = Math.ceil(position/DefaultConfig.rows);
       var y = (position%DefaultConfig.rows)+2;
       if (y> DefaultConfig.cols)
        console.log("Cannot move right");
       else
        positionPiece.call(this,x,y);
    }


    function buildPiece(){
        positionPiece.apply(this,this.config.coin.coinPosition)
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
        this.config = Object.assign({},param, DefaultConfig);
        this.config.mainBoxHeight = this.config.container.clientHeight;
        this.config.mainBoxWidth= this.config.container.clientWidth;
        buildBoard(this.config);
        buildPiece.apply(this);
    } 

    return {
        init : init,
        up : up,
        down: down,
        left: left,
        right: right
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
    return {
        circleElement: circleElement,
        coinPosition: this.circleconfig.coinPosition};
}

var board= new PlayBoarrd();
board.init({
    container: document.getElementsByClassName("mainBox")[0],
    coin: new Circle({
        radius: 20,
        colour: "#D32F2F",
        coinPosition: [6,4]
      })
    });
