class UberDrive {
  constructor(customerName, noOfPassengers, distanceInKm, luxury = "no") {
    this.customerName = customerName;
    this.noOfPassengers = noOfPassengers;
    this.distanceInKm = distanceInKm;
    this.luxury = luxury;
  }
  getPrice() {
    const pricePerKm = this.luxury === "no" ? 15 : 50;
    //Total price will be noOfPassengers * pricePerKm * distanceInKm
    const totalPrice = this.noOfPassengers * pricePerKm * this.distanceInKm;
    return `The total fare for ${this.customerName} is Rs.${totalPrice}`;
  }
}

let customer1 = new UberDrive("Michael", 3, 50);
let customer2 = new UberDrive("Jagan", 4, 30, "yes");

console.log(customer1.getPrice());
console.log(customer2.getPrice());
// returns the total fare for the ride
/* Output is

    The total fare for Michael is Rs.2250
    The total fare for Jagan is Rs.6000

*/