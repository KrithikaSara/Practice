class Trex{

    constructor(){
        this.score=null;
    }
    
    start(){
        console.log("Game started");
        this.score=0;
        this.scoreBoard();  
    }
    
    getScore(){
        console.log(this.score);
        }
    scoreBoard(){
        var that = this;
        this.timer1 = setInterval(function increment(){
         that.score++;
         that.getScore();
     },1000);
    } 
    obstacle(){
        console.log("Obstacle Coming ahead");
        console.log("call trex.jump() within 5 secs");
        var that=this;
        this.timer2 = setTimeout(function hit(){
            console.log("Hit with the obstacle! GAMEOVER");
            console.log("Final Score is "+ that.score);
            clearInterval(that.timer1);
            clearTimeout(that.timer2);
        },5000);
        
    }
    
    jump(){
        console.log("Jumping");
        clearTimeout(this.timer2);
    }

}

var trex = new Trex();

