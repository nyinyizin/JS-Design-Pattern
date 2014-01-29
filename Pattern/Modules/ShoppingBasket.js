/**
 * Created by akk on 1/29/14.
 */

var basketModule=(function(){

    var basket=[];
    function doSomethingPrivate(){

    }
    function doSomethingElsePrivate(){

    }
    return{
        addItem:function(values){
            basket.push(values);
        },
        getItemCount:function(){
            return basket.length;
        },
        doSomething:doSomethingPrivate,
        getTotal:function(){
            var q =this.getItemCount(),
                p=0;
            while(q--){
                p+=basket[q].price;
            }
            return p;
        }
    };

})();

basketModule.addItem({
    item:"bread",
    price:0.5
});

basketModule.addItem({
    item:"butter",
    price:0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

console.log(basketModule.basket);
//console.log(basket);