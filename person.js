class Person {
	constructor(age) {
		this.age = age;
	}

	static generatePeople(number, min, max) {
		return [...Array(number).keys()].map(x => Math.floor(Math.random() * (max - min) + min));
	}
}