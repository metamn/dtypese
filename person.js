class Person {
	constructor(age) {
		this.age = age;
	}

	static generatePeople(number, min, max) {
		return [...Array(number).keys()].map(x => Math.floor(Math.random() * (max - min) + min));
	}

	static hasTwiceAsOld( people ) {
		people.sort((a, b) => a > b);

		console.log('The age of people in the list: ' + people);
		console.log('Has twice as old?: ');

		return ( 2 * people[0] <= people[people.length - 1]);
	}
}