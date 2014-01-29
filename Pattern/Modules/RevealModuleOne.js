/**
 * Created by akk on 1/29/14.
 */

var myRevealingModule=(function(){
    var privateCounter=0;
    function privateFunction(){
        privateCounter++;
    }
    function publicFunction(){
        publicIncrement();
    }
    function publicIncrement(){
        privateFunction();
    }
    function publicGetCount(){
        return privateCounter;
    }
    return{
        start:publicFunction,
        increment:publicIncrement,
        count:publicGetCount
    }
})();

myRevealingModule.start();
myRevealingModule.increment();
myRevealingModule.increment();
myRevealingModule.increment();
console.log(myRevealingModule.count());