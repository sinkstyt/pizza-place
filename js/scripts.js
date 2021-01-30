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
  const defaultNames = ["red herring", "baz", "bat", "bar", "diablo", "foo", "wasabi", "Georgian", "Jersey", "espresso", "caprice"];
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

// User Interface Logic ------>
$("document").ready(function() {
  let pizza1 = new Pizza();
  let order1 = new Order();
  $("form").submit(function(event) {
    event.preventDefault();
    const sizeSelected = $("input:radio[name=size-select]:checked").val();
    if (sizeSelected !== "large") {
      pizza1.size = "small";
    }
    $("input:checkbox[name=toppings]:checked").each(function() {
      const topper = $(this).val();
      pizza1.toppings.push(topper);
    });
    let typedInName = $("input#pizza-namer").val();
    if (typedInName) {
      pizza1.assignName(typedInName);
    }
    let randoChecked = $("input#random-name").val();
    if (randoChecked === "on") {
      pizza1.assignName();
    }

    $("div.show-pizzas").slideUp();

  });
});