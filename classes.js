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

/*29-mar-2018*/
/*method 1*/
class User{}
User.prototype.test=5;
alert(new User().test);


/*method 2*/
class User{
	get test(){
		return 5;
	}
}
alert(new User().test);

/*class factory*/
function makeClass(phrase){
	return class{
		sayHi(){
			 alert(phrase);
		};
	};
}
let User=makeClass("Hello");
new User().sayHi;

/*Static methods*/

/*method 1*/
class User{
	static staticMethod(){
		alert(this===User);
	}
}
User.staticMethod();

/*method 2*/
function User(){ }
User.staticMethod = function() {
	alert(this===User);
};

/*example 1*/
class Article{
	constructor(title,date){
		this.title=title;
		this.date=date;
	}
	static compare(articleA, articleB){
		return articleA.date - articleB;
	}
}

let articles = [
 new Article("Mind", new Date(2016,1,1)),
 new Article("Body", new Date(2016,0,1)),
 new Article("Javascript", new Date(2016,11,1))
];

articles.sort(Article.compare);

alert(articles[0].title);

/*method 2*/

class Article {
 constructor(title,date){
 	this.title=title;
 	this.date=date;
 }
 static createTodays(){
 	return new this("Today's digest",new Date());
 }
}

let article = Article.createTodays();

alert (article.title);
