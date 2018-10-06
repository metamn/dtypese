class Person {
	constructor(age) {
		this.age = age;
	}

	static generatePeople(number, min, max) {
		return [...Array(number).keys()].map(
			x => new Person(Math.floor(Math.random() * (max - min) + min))
		);
	}

	static hasTwiceAsOld( people ) {
		people.sort((a, b) => a.age > b.age);

		console.log('The age of people in the list: ' + people.map(p => p.age));
		console.log('Has twice as old?: ');

		return (2 * people[0].age <= people[people.length - 1].age);
	}
}