/**
 * Created by akk on 1/29/14.
 */

var myNameSpace=(function(){
    var myPrivateVar,myPrivateMethod;

    myPrivateVar=0;

    myPrivateMethod=function(foo){
        console.log(foo);
    };

    return{
        myPublicVar:"foo",
        myPublicFunction:function(bar){
            myPrivateVar++;
            console.log(myPrivateVar);
            myPrivateMethod(bar);
        }
    };

})();

myNameSpace.myPublicVar="dhoom";
console.log(myNameSpace.myPublicVar);
myNameSpace.myPublicFunction("hello");
myNameSpace.myPublicFunction("how");
myNameSpace.myPublicFunction("was");
myNameSpace.myPublicFunction("that");
