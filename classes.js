/*25-mar-2018

function User(name){
    this.name=name;
}
User.prototype.sayHi = function() {
    alert(this.name);
}
let user =new User("John");
user.sayHi();

class User2{
    constructor(name){
        this.name=name;
    }
    
    sayHi(){
        alert(this.name);
    }
}

let user2 = new User2("John");
user2.sayHi(); */

/*26-mar-2018*/

class User3{
	constructor(name){
		this.name=name;
	}
	get name(){
		return this.name;
	}
	set name(value){
		if(value.length<4){
			alert("Name is too short.");
			return;
		}
		this.name=value;
	}
}
let user= new user3("John");
alert(user.name);

user= new User3("");
