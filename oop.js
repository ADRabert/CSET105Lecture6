class Person {
	constructor(name, age, gender, interests) {
		this.name = name, this.age = age, this.gender = gender, this.interests = interests;
	}
	bio() {
		return this.name + ` is ` + this.age + ` years old. They like ` + this.interests + `.`;
	}
	greeting() {
		return `Hi! I'm ` + this.name + `.`;
	}
}
let persons = [];
const prompt = require('prompt-sync')();
while (isNaN(count) || count < 1) var count = Math.floor(Number(prompt(`Enter amount of people: `)));
for (i = 0; i < count; i++) {
	while (!name) var name = prompt(`Enter person ` + count + ` name: `);
	while (age == "" || isNaN(age)) var age = Math.floor(Number(prompt(`Enter age: `)));
	while (!gender) var gender = prompt(`Enter gender: `);
	while (!interests) var interests = prompt(`Enter interests: `);
	persons.push(new Person(name, age, gender, interests));
}
console.log(persons[0].greeting());
console.log(persons[0].bio());