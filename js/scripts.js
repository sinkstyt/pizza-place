// Business Logic ------------->
function Pizza() {
  this.size = "large";
  this.toppings = [];
  this.smallTopEach = 2;
  this.largeTopEach = 4;
  this.largeBasePrice = 38;
  this.smallBasePrice = 26;
  this.name = "orphan";
}
Pizza.prototype.assignName = function(name = "not specified") {
  const defaultNames = ["plain", "baz", "bat", "bar", "diablo", "foo", "wasabi", "Georgian", "Jersey", "espresso", "caprice"];
  if (name === "not specified") {
    let randomNumInRange = Math.floor(Math.random() * 10) + 1;
    this.name = defaultNames[randomNumInRange];
  } else {
    this.name = name;
  }
}
function Order() {
  this.allPizzas = [];
  this.salesTax = 1.08875;
}
Order.prototype.addPizza = function(newPizza) {
  this.allPizzas.push(newPizza);
}
Order.prototype.calcTotal = function() {
  let grandTotal = 0;
  for (const pizza of this.allPizzas) {
    if (pizza.size === "small") {
      let toppingsCost = pizza.smallTopEach * pizza.toppings.length;
      let pizzaSubtotal = toppingsCost + pizza.smallBasePrice;
      grandTotal += pizzaSubtotal;
    } else {
      let toppingsCost = pizza.largeTopEach * pizza.toppings.length;
      let pizzaSubtotal = toppingsCost + pizza.largeBasePrice;
      grandTotal += pizzaSubtotal;
    }
  }
  this.allPizzaSubtotal = grandTotal;
  this.grandTotal = (Math.round(this.allPizzaSubtotal * this.salesTax * 100)) / 100;
  return this.grandTotal;
}