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
user2.sayHi();