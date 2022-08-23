//So far we have 
// Map
// Filter 
// Reject 
// FInd 

// Reduce is the multitude of list transformations it can be used to express any list transformation.

var orders =[
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
]

//with arrow functions
var totalAmount = orders.reduce((sum, orders) => sum + orders.amount, 0)
    //display amount of each order
    
    
    console.log(totalAmount);


// var totalAmount = orders.reduce(function(sum, order){
//     console.log("hello",sum, order);
//     return sum + order.amount;
// },0)



// var totalAmount = 0
// for(var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount
// }
console.log("The Final Total Is: " + totalAmount);