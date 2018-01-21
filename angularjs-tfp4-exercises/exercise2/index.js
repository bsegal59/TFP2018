var shoppingCart = angular.module("myApp", []);

angular.module('myApp').component('shoppingCart', {
  templateUrl: 'cart.html',
  controllerAs: 'CartController', 
  controller: [CartController]
});


function CartController (){
  /*
   * TODO: Set a controller variable called 'items' to the array that is listed below
    [{title: 'Red Wine', quantity: 3, price: 3.95},
    {title: 'White Wine', quantity: 7, price: 12.95},
    {title: 'Blue Wine', quantity: 5, price: 6.95}];
   */


  /* TODO: Create a controller function called remove(index) which takes index as a parameter, and deletes from the 'items' variable at that particular index 
   * Use the JavaScript splice() function
  */ 
  var ctrl = this
  ctrl.items = [
    {title: 'Red Wine', quantity: 3, price: 3.95},
    {title: 'White Wine', quantity: 7, price: 12.95},
    {title: 'Blue Wine', quantity: 5, price: 6.95}
  ];
  ctrl.remove = function(n){
    ctrl.items.splice(n,1);
  }
}
