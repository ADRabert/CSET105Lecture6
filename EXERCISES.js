const prompt = require('prompt-sync')();

// Exercise 1: Car object + start function
const car = {
	make: "Kia",
	model: "Forte",
	year: 2023,
	color: "Orange",
	start: function() {
		console.log("The car has started.");
	}
};
car.start();

// Exercise 2: Person object + greet function; modify age & add occupation after definition
const person = {
	firstName: "John",
	lastName: "Doe",
	age: 25,
	city: "Lancaster",
	greet: function() {
		console.log("Hi, my name is", this.firstName, this["lastName"], `and I am`, this.age, `years old.\n`);
	}
}
console.log(`\nPerson's name:`, person.firstName, person.lastName);
console.log(`Person's age:`, person.age);
person.age = 30;
console.log(`Person's new age:`, person.age);
person.occupation = "Student";
console.log(`The person is a`, person.occupation.toLowerCase() + `.`);
person.greet();

// Exercise 3: Student object + info function; name must itself be object containing first & last
const student = {
	name: {
		first: "Austin",
		last: "Rabert"
	},
	age: 22,
	courses: [
		"Computer Software Engineering Technology",
		"Small Business Management & Entrepreneurship",
		"Public Speaking"
	],
	printInfo: function() {
		console.log(`Student name:`, this.name.last + `,`, this.name.first + `\nEnrolled courses:`, this.courses);
	}
}
student.printInfo();

// Exercise 4: JSON of laptop model; convert to JS object, add price, convert back to JSON & print
let laptop = JSON.parse('{ "type": "laptop", "model": "HP 15t-dw300" }');
laptop.price = 500;
console.log(`\n` + JSON.stringify(laptop) + `\n`);

// Exercise 5: Person class; function to introduce self, & function that declares birthday & increases age
class Person {
	constructor(name, age) {
		this.name = name, this.age = age;
	}
	birthday() {
		console.log(`It's`, this.name + `'s birthday! They're now`, ++this.age, `years old.`);
	}
	introduce() {
		console.log("Hi, I'm", this.name, "and I am", this.age, "years old.");
	}
}
let persons = [];
persons.push(new Person("Austin", 22));
persons.push(new Person("Logan", 18)); // Partner
persons[0].introduce();
persons[1].birthday();
console.log();

// Exercise 6: Bank account class; functions to deposit to & withdraw from account, and display balance
class BankAccount {
	constructor(owner, balance) {
		this.owner = owner, this.balance = balance;
	}
	displayBalance() {
		console.log(this.owner + `'s account: $` + this.balance);
	}
	deposit(amount) {
		this.balance += amount;
		console.log(`Deposited $` + amount, `to the account of`, this.owner + `.`);
	}
	withdraw(amount) {
		this.balance -= amount;
		console.log(`Withdrew $` + amount, `from the account of`, this.owner + `.`);
	}
}
let account = new BankAccount("Rabert, Austin", 500);
account.displayBalance();
account.deposit(50);
account.displayBalance();
account.withdraw(100);
account.displayBalance();
console.log();

// Exercise 7: Animal class; function to have animal make sound
class Animal {
	constructor(name, sound) {
		this.name = name, this.sound = sound;
	}
	makeSound() {
		console.log(`The`, this.name, `says`, this.sound + `!`);
	}
}
let dog = new Animal("dog", "bark"), cat = new Animal("cat", "meow");
dog.makeSound();
cat.makeSound();