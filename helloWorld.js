var myString = "hiiiii..........hello world";
debugger;
var readyDOM = function () {
    
    // here is where all ur code goes in
    //tyrpe all that u need to do in ur app
    debugger;
    var callBack = function () {
        console.log('hello i am called');
    }

    var ele = document.getElementById('box1');
    ele.onclick = callBack;

    document.body.onresize = function () {
        console.log('resizing');
        var heightString = ele.style.height;
        var heightInt = parseInt(heightString);

        ele.style.height = (heightInt + 10) + 'px';
    }

}
var f2 = function(param1){
    console.log(param1+ " second function is called");
}
var f1 = function(param1){
    console.log(param1);
    f2;
    f2();
    f2(param1);
    f2(param1 || 'new value');
    f2('new value 22');
}