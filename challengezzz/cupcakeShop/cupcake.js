// What should a cupcake have?
// Icing, Cake, Price

class Cupcake {
    constructor(icing, cake, price) {
      this.icing = icing;
      this.cake = cake;
      this.price = price;
    }
  
    getDescription() {
      console.log(
        `A ${this.icing} topped ${this.cake} cupcake for $${this.price}`
      );
    }
  }
  
  /*
  
  APIE
  A - Abstraction: Hide complicated detail behind an easy interface
  P - Polymorphism: One interaction, with many implementations (String.length, Array.length)
  I - Inheritence: Class heirarchy that shares functionality and attributes
  E - Encapsulation: Data and functionality to manipulate that data are bundled together
  
  */
  
  module.exports = Cupcake;