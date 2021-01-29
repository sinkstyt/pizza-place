// Business Logic ------------->
function Pizza() {
  this.size = "large";
  this.toppings = [];
  this.largeBasePrice = 38;
  this.smallBasePrice = 26;
}
function Order(pizza) {
  this.diablo = pizza;
}
Order.prototype.addPizza = function(pizzaInstance) {
  this.pizza1 = pizzaInstance;
}