


// Added class ProductProperties which created to three products, product one and two and bread. 
// Each one has the values given in the constructor: name, quantity and price 
class ProductProperties { 
constructor(name, quantity, price){ 
this.name = name; 
this.name = price;
this.name = quantity;
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
    super(name,price,quantity )
        this.expirationDate = expirationDate;
      }   
  
      toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;

      }
    } 
    class stores {
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
    
//Task one: 
    const product1 = new ProductProperties("Grape", 2.5, 50);
    const product2 = new ProductProperties("Mango", 1.2, 30);
    const milk = new PerishableProductProperties("Milk", 1.5, 10, "2024-04-18");
    const cheese = new PerishableProductProperties("Cheese", 3.75, 5, "2025-04-18");
    const bread = new ProductProperties("Bread", 2.0, 20);
 
 // Add these products to a Store object.
    const store = new Store();
    store.addProduct(product1);
    store.addProduct(product2);
    store.addProduct(milk);
    store.addProduct(cheese);
    store.addProduct(bread);
    

    









