// Business Logic ------------->
function Pizza(size, toppingsArr) {
  this.size = size;
  this.toppings = toppingsArr;
  this.smallTopEach = 2;
  this.largeTopEach = 4;
  this.largeBasePrice = 38;
  this.smallBasePrice = 26;
  this.name = "orphan";
  this.piePrice = 0;
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
Pizza.prototype.calcThisPiePrice = function() {
  if (this.size === "small") {
    let toppingsCost = this.smallTopEach * this.toppings.length;
    let pizzaSubtotal = toppingsCost + this.smallBasePrice;
    this.piePrice += pizzaSubtotal;
  } else {
    let toppingsCost = this.largeTopEach * this.toppings.length;
    let pizzaSubtotal = toppingsCost + this.largeBasePrice;
    this.piePrice += pizzaSubtotal;
  }
}
function showPizza(newPizza){
  $("ul.pizza-list").prepend(`<li class="entered-pizza">Size: ${newPizza.size} | Toppings: ${newPizza.toppings} | Price: $ ${newPizza.piePrice}</li>`);
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
    grandTotal += pizza.piePrice;
  }    
  this.allPizzaSubtotal = grandTotal;
  this.grandTotal = (Math.round(this.allPizzaSubtotal * this.salesTax * 100)) / 100;
  return this.grandTotal;
}

// User Interface Logic ------>
$("document").ready(function() {
  let order1 = new Order();
  $("form").submit(function(event) {
    event.preventDefault();
    const sizeSelected = $("input:radio[name=size-select]:checked").val();
    let toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      const topper = $(this).val();
      toppingsArray.push(topper);
    });
    let pizza1 = new Pizza(sizeSelected, toppingsArray);
    let typedInName = $("input#pizza-namer").val();
    if (typedInName) {
      pizza1.assignName(typedInName);
    }
    let randoChecked = $("input#random-name").val();
    if (randoChecked === "on") {
      pizza1.assignName();
    }
    order1.addPizza(pizza1);
    showPizza(pizza1);
    let fullPrice = order1.calcTotal();
    $("span#grand-total").html(`$ ${fullPrice}`);
    $("div.show-pizzas").removeClass("show-pizzas");
    $("div.show-pizzas").slideDown();
    $(".pizza-namer").attr("margin-bottom", "0");
  });

});