/**
 * Created by akk on 1/29/14.
 */

var myRevealingModule=(function(){
    var privateVar="Ben Cherry",
        publicVar="Hey There!";

    function privateFunction(){
        console.log("Name: "+privateVar);
    }
    function publicSetname(strName){
        privateVar=strName;
    }
    function publicGetName(){
        privateFunction();
    }

    return{
        setName:publicSetname,
        greeting:publicVar,
        getName:publicGetName
    };

})();

myRevealingModule.setName("Paul Kinlan");
myRevealingModule.getName();
