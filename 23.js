// object is a collection of properties
// assume that a person has name and gender properties

let person = {
	firstName:'Tim',
	lastName:'Joe'
	
}

console.log(person) // { firstName: 'Tim', lastName: 'Joe'}
console.log(person.lastName) // Joe
//can call same value as below
console.log(person['lastName']) // Joe

//update new value
person.firstName = 'Tim Dane'
console.log(person.lastName) // update to Tim Date

//can add the properties if it was not defined previously
person.gender = 'Male'
console.log(person) // { firstName: 'Tim Dane', lastName: 'Joe', gender: 'Male'}