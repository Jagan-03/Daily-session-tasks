class Person {
  constructor(firstName, lastName, age, contact, occupation, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.contact = contact;
    this.occupation = occupation;
    this.nationality = nationality;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return `${this.firstName} is ${this.age} years old`;
  }
  getContact() {
    return this.contact;
  }
  getOccupation() {
    return `${this.firstName} is a ${this.occupation}`;
  }
  getNationality() {
    return this.nationality;
  }
}

let michael = new Person("Michael", "Xavier", 21, 7010707641, "Full stack developer", "Indian");

console.log(michael.getFullName()); // prints "Michael Xavier"
console.log(michael.getAge()); // prints "Michael is 21 years old"
console.log(michael.getContact()); // prints 7010707641
console.log(michael.getOccupation()); // prints "Michael is a Full stack developer"
console.log(michael.getNationality()); // prints "Indian"