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


} 
  class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
    super(name,price,quantity )
        this.expirationDate = expirationDate;
      }   
  
      toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;

      }
    } 
    







