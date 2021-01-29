# Pizza Place Order Page

#### By _**Tyler Sinks**_
_originally created 29 January, 2021_
_last major revision 29 January, 2021_

## Technologies Used

* _html, CSS, JavaScript_
* _VS Code_
* _git and GitHub_
* _Bootstrap and jQuery_
* _Markdown for this README_

## Description
_Pizza Place Order Page exists to take your order. Pizza order details can be selected by radio buttons for size and checkboxes for toppings. A pizza is added to the order once all details are selected and "Add this pizza" is pressed. An order total will also be displayed upon clicking button "TOTAL"._

## Specs / Tests _in plain English_
### **Describe:** Pizza()
| Test | `Code` | Expect |
| :------- | :------- | :------- |
| It will create an instance of Pizza whose type is 'object'. | `const pizza1 = new Pizza();` | (typeof pizza1).toEqual('object') |
| It will assign size "large" at a key "size" on instance of Pizza. | `pizza1.size = "large";` | (pizza1.size).toEqual("large") |
| It will have an array keyed at "toppings" to store selected toppings. | `pizza1.toppings = ["topping", "topping", "topping"]` | (pizza1.toppings).toEqual(Array ["topping", "topping", "topping"] ) |
| It will have a price value keyed according to size largeBasePrice. | `pizza1.largeBasePrice` // `38` | (pizza1.largeBasePrice).toEqual(38) |

---

### **Describe:** Order()
| Test | `Code` | Expect |
| :------- | :------- | :------- |
| It will create an instance of Order whose type is 'object'. | `const order1 = new Order();` | (typeof order1).toEqual('object') |
| It will initialize all new instances of Order with an empty array called "allPizzas". | `let order17 = new Order();` | (order17.allPizzas).toEqual( [] ) |

---

### **Describe:** AssignName()
| Test | `Code` | Expect |
| :------- | :------- | :------- |
| It will assign a new key on an instance of Pizza that holds a string (a name) as its value. | `const pizza1 = new Pizza(); pizza1.assignName();` | (pizza1.name).toEqual("baz") |
| It will assign a new key "name" on an instance of Pizza when a name is supplied as parameter. | `const pizza2 = new Pizza(); pizza2.assignName("Charlie);` | (pizza2.name).toEqual("Charlie") |
| It will assign a new key "name" on instance of Pizza chosen at random from an array of strings if a name is not passed in as parameter. | `const pizza3 = new Pizza(); pizza3.assignName();` | (pizza3.name).toEqual("caprice") |

---

### **Describe:** addPizza()
| Test | `Code` | Expect |
| :------- | :------- | :------- |
| It will add an instance of Pizza to array stored at order instance's key "allPizzas". | `const pizza7 = new Pizza(); const order3 = new Order(); order3.addPizza(pizza7);` | (order3.allPizzas).toEqual(pizza7) |

---

### **Describe:** CalculateTotal()
| Test | `Code` | Expect |
| :------- | :------- | :------- |
| It will return a number | `const thisOrderPrice = CalculateTotal();` | (typeof thisOrderPrice).toEqual("number") |
| It will return a subTotal price for one pizza by summing cost of all toppings and basePrice | `const subTotalOnePie = CalculateTotal();` | (subTotalOnePie).toEqual(42) |
| It will return a subTotalForOrder by summing subTotal price of all pizzas | `const allPizzasPreTax = CalculateTotal();` | (allPizzasPreTax).toEqual(74) |
| It will return a grand total from subTotalForOrder by adding sales tax. | `const grandTotal = CalculateTotal();` | (grandTotal).toEqual(82.78) |

## Setup Instructions for Installing Locally (clone from GitHub)
1. Copy this url to your clipboard: https://github.com/sinkstyt/pizza-place.git
2. Launch your preferred command line shell or terminal (Terminal comes with macOS and Windows 10 has Command Prompt)
3. From your terminal/command prompt line, navigate to the folder in which you want this project to live
> when cloning using git, a new folder is automatically created to hold all the files of the GitHub respository
4. Use the git clone command along with the pasted link from your clipbaord:
> `$ git clone https://github.com/sinkstyt/pizza-place.git`
5. Press <kbd>ENTER</kbd>
> Something like the following will appear in your terminal that indicates the download was successful:
6. Change directory into the root folder just created
> `$ cd pizza-place`
7. Launch the your favorite text editor from within this directory to examine all the files
> `$ code .` _(If VS Code has its command prompt setup correctly)_

## Explore the Live Page Installation
* _to jump to a rendering of the page in your browser_
* GitHub Pages graciously hosts at this URL: [Pizza Place Order Page - GO!](https://sinkstyt.github.io/pizza-place)
* _Try the link or paste the URL into your browser's address bar_
> https://sinkstyt.github.io/pizza-place/index.html

## Stretch Goals
* a clean, stylized view of the complete order before calculating an order total (_a la_ cart view. Sorry for the pun.)
* the ability for the user to remove a pizza from the current order/via the cart view
* the ability to add one more pie to the order from the order review/cart view page

## Known Bugs

* _No known bugs at this time. Only Google Chrome version Version 88.0.4324.96 (64-bit) was used in testing the project._

## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Tyler Sinks &copy; 2021

## Contact Information

_To communicate praise, critique, and suggestion_
_the site's author can be reached at tyler.sinks@gmail.com_