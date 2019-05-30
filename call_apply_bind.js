let person = {
	firstName: 'Ihar',
	lastName: 'Padbiarezski',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	getSalary: function(salary, currency) {
		return this.firstName + ' ' + this.lastName + ': ' + salary + currency;
	}
};

let newPerson = {
	firstName: 'Tom',
	lastName: 'Crouse'
};

// // apply
// document.writeln(person.getFullName());
// document.writeln(person.getFullName.call(newPerson));

// document.writeln(person.getSalary(500, 'USD'));
// document.writeln(person.getSalary.call(newPerson, 700, 'RUB'));

// // call
// document.writeln(person.getFullName.apply(newPerson));
// document.writeln(person.getSalary.apply(newPerson, [ 900, 'RUB' ]));

// bind
let newPersonFullName = person.getFullName.bind(newPerson);
document.writeln(newPersonFullName());
let newPersonSalary = person.getSalary.bind(newPerson);
document.writeln(newPersonSalary(100, 'BLR'));
