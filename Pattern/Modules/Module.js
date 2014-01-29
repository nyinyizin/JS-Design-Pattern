/**
 * Created by akk on 1/29/14.
 */

var testModule=(function(){

    var counter=0;
    return{
        incrementCounter:function(){
            return counter++;
        },
        resetCounter:function(){
            console.log("counter value prior to reset: "+counter);
            counter=0;
        }
    };
})();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

testModule.resetCounter();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

testModule.resetCounter();