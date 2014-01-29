/**
 * Created by akk on 1/29/14.
 */


var newObject={};
var newObject=Object.create(Object.prototype);
var newObject=new Object();

var defineProp=function(obj,key,value){
    var configure={
        value:value,
        writable:true,
        enumerable:true,
        configurable:true
    };
    Object.defineProperty(obj,key,configure);
};

var person=Object.create(Object.prototype);

defineProp(person,"car","Delorean");
defineProp(person,"dateOfBirth","1981");
defineProp(person,"hasBeard",false);

console.log(person);

var driver=Object.create(person);
defineProp(driver,"topSpeed","100mph");
console.log(driver.dateOfBirth);
console.log(driver.topSpeed);
var driver2=new Object();
driver2=driver;
driver2.topSpeed="10mph";
console.log(driver2.topSpeed);
console.log(driver.topSpeed);