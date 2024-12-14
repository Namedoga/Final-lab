
// Added class ProductProperties which created to three products, product one and two and bread. 
// Each one has the values given in the constructor: name, quantity and price 
class ProductProperties { 
  constructor(name, quantity, price) { 
  this.name = name; 
  this.quantity = quantity; 
 this.price = price; 
  }
getTotalValue() {
    return this.price * this.quantity;
  }

toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }

  static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price -= product.price * discount;
    });
  }

// Added class PerishableProductProperties extends to previous class ProductProperties, 
//which becomes a subclass. 
//Using super PPP inherits properties of ProductProperties  
// Also adds expirationDate
}// milk and cheese are instances of PPP 
  class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
    super(name,quantity,price )
        this.expirationDate = expirationDate;
      }   
  
      toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;

      }
    } 

// Created a store class that has PerishableProductProperties and ProductProperties in its inventory 
// inventory is an array that stores the products 
// using addProduct(product) and "push" we can add products 
// using getInventoryValue() and "reduce" method to sum up the total 
// using findProductByName(name) we can find products by name or send back "null"

class Store {
  constructor() { 
      this.inventory = [];
  }

  addProduct(product) {
      this.inventory.push(product);
  }

  getInventoryValue() {
      return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
  }

  findProductByName(name) {
      return this.inventory.find(product => product.name === name) || null;
  }
}



//creates 2 new instance of the ProductProperties called named product one and two 
// Also creates parameters for those new instances
//Task one: 
    const product1 = new ProductProperties("Grape", 2.5, 50);
    const product2 = new ProductProperties("Mango", 1.2, 30);
    const milk = new PerishableProductProperties("Milk", 1.5, 10, "2024-04-18");
    const cheese = new PerishableProductProperties("Cheese", 3.75, 5, "2025-04-18");
    const bread = new ProductProperties("Bread", 2.0, 20);
 
//Created new instances of the store class and assigns it to the const var 
// initializes an empty inventory array (this.inventory = [];)

 // Add these products to a Store object.
    const store = new Store();
    store.addProduct(product1);
    store.addProduct(product2);
    store.addProduct(milk);
    store.addProduct(cheese);
    store.addProduct(bread);

//before
    console.log("before discount:", store.getInventoryValue());

 //after
    ProductProperties.applyDiscount(store.inventory, 0.15);
    
    console.log("after discount:", store.getInventoryValue());
    

    
//Searches for a product in the inventory by declaring a const var searchName as milk
// then calls "findProductByName" method of then store class 
//the if statement checks if "foundProduct" is Null or a product 
// if found then logs to console if not the prints "not found" 


// Find and print details of a specific product
const searchName = "Milk";
const foundProduct = store.findProductByName(searchName);
if (foundProduct) {
  console.log(`Details '${searchName}':`, foundProduct.toString());
} else {
  console.log(`Product '${searchName}' not found.`);
}

    









