/*
	return: null
	args: colour,points,isLive,difficulty,config = {
													hero,
													ghost,
													ghostCount,
													difficulty
															}
	
	functionality: constructs the entire game with environment, hero and ghost
	*/

function Board(config){

 	/*
	return: null
	args: null
	functionality: handles scores
	*/
 function increasesPoints(){

 }
	/*
	return: null
	args: null
	functionality: builds the wall randomly
	*/ 
 function buildWall(){

 }

}
	/*
	return: null
	args: null
	functionality: starts the game
	*/  
Board.prototype.start = function(){

}
	/*
	return: null
	args: null
	functionality: when the game is over, resets the board and the score is also reset
	*/ 
 
Board.prototype.reset = function(){

}

/*
return: null
args: colour,speed
functionality: constructs packman and moves the packman in all directions
*/
function packman(){
	/*
	return : null
	args: null
	functionality: moves the pacman up till direction is changed and stop if it  hits a wall or ghost
	 */
	function up(){

	}
	/*
	return : null
	args: null
	functionality: moves the pacman down till direction is changed and stop if it  hits a wall or ghost
	*/
	function down (){

	}
	/*
	return : null
	args: null
	functionality: moves the pacman left till direction is changed and stop if it  hits a wall or ghost
	*/
	function left(){

	}
	/*
	return : null
	args: null
	functionality: moves the pacman right till direction is changed and stop if it  hits a wall or ghost
	*/
	function right(){

	}
}


/*
 return: null
 args: colour, speed
 functionality: constructs the ghost and calls the moveRandom()
*/
function ghost(){

	// moves the ghost randomly
	function moveRandom(){

	}
}

