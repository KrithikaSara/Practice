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

        var newPosition = DefaultConfig.rows*(x-1)+y;
        var findCircle = this.config.container.getElementsByClassName("circle")[0];
        
        if (findCircle){
            var parent = findCircle.parentNode;
            parent.removeChild(findCircle);
        }  
        
        this.config.container.childNodes[newPosition].appendChild(this.config.coin);
        
        }       

    function buildPiece(){
        positionPiece.apply(this,DefaultConfig.coinPosition)
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
        //this.config.container.mainBoxHeight = this.config.container.getElementsByClassName("mainBox")[0].clientHeight;
        //this.config.container.mainBoxWidth= this.config.container.getElementsByClassName("mainBox")[0].clientWidth;
        buildBoard(this.config);
        buildPiece.apply(this);
    } 

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

/*
function test(){
            var variable1 = 'one';
        function go1(){

            var variable2 = 'two';
            var variable3 = 'three';

            function go2(){
                var variable4 = 'four';
                console.log(variable1);
                console.log(variable2);
            }
            function go3(){
                var variable8 = "eight";
                console.log(variable3);
                go2()
                go4()
                function go4(){
                    var variable5 = "five";
                    go2()
                }
            }

            go2()
            go3()

        }

        go1()
        go2()
}
*/
