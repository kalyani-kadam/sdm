// var getProduct = function(){
//     // product = {id:1,title:"Rose"}; 
//     product[2] = [1,"rose",2,"jasmine"];
//     return product;
// }
// var flowers = getProduct();
// console.log(flowers);



var catalog = require("./products.json");

var getProduct = function(){
   var products = catalog;
    products[0].title = "gerbera";
    return products;
}
var flowers = getProduct();
for(i=0;i<flowers.length;i++){
    console.log(flowers[i]);
}