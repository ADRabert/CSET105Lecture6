/*
let Car = {
	year: 2023,
	make: "Kia",
	model: "Forte",
	style: "LXS",
	color: "Orange",
	desc: function() {
		return this.year + " " + this.make + " " + this.model + " " + this.style;
	}
}, Person = {
	name: {
		first: "Austin",
		last: "Rabert"
	},
	age: 22,
	gender: "Male",
	eyeColor: "Brown",
	hobby: "Gardening",
	desc: function() {
		return "My name is " + this.name.first + " " + this.name.last + " and I am a " + this.age + " year old " + this.gender.toLowerCase()
		+ ". I have " + this.eyeColor.toLowerCase() + " eyes, and I like " + this.hobby.toLowerCase() + ".";
	}, fullName: function() {
		return this.name.last + ", " + this.name.first;
	}
};
console.log(Car.desc());
console.log(Person.desc());
console.log(Person.fullName());
*/

let object = JSON.parse('{ "type": "laptop", "model": "MacBook Pro" }'); // Convert JSON to JS object
console.log(object);
console.log(object.type);
console.log(object.model);
console.log(JSON.stringify(object)); // Convert back to JSON