/**
 * Created by akk on 1/29/14.
 */

var myModule=(function(jQ,_){
    function privateMethod1(){
        jQ(".container").html("test");
    }
    function privateMethod2(){
        console.log(_min([10,5,100,2,1000]));
    }

    return{
      publicMethod:function(){
          privateMethod1();
      }
    };
})(jQuery,_);

myModule.publicMethod();

var myModule=(function(){
    var moudle={},
        privateVariable="Hello World";
    function privateMethod(){

    }
    module.publicProperty="Foobar";
    module.publicMethod=function(){
        console.log(privateMethod());
    };
    return module;
})();