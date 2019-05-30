function getSum(a) {
	return function getSecond(b) {
		return function getThird(c) {
			return a + b + c;
		};
	};
}

document.writeln(getSum(1)(2)(3));

let firstSum = getSum(45);

let secondSum = getSum(10);

document.writeln(firstSum(2)(3));

function getSum(firstName) {
	return function getSecond(secondName) {
		return function getThird(salary) {
			return firstName + ' ' + secondName + ': ' + salary + '$';
		};
	};
}

document.writeln(getSum('Ihar')('Padbiarezski')(300));

function makeCount() {
	let count = 0;
	return function() {
		return count++;
	};
}

let counter = makeCount();
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCount();
console.log(counter2());
console.log(counter2());
console.log(counter());

function makeGreeting() {
	let myName = 'Sergio';

	function greeting(personName) {
		return `Hi, ${personName}! My name is ${myName}!`;
	}
	return greeting;
}

let newGreeting = makeGreeting();

document.writeln(newGreeting('George'));
