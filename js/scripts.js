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