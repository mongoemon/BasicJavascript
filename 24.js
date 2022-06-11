// object is a collection of properties
// assume that a person has name and gender properties

let person = {
	firstName:'Tim',
	lastName:'Joe'
	
}

//can add the properties if it was not defined previously
person.gender = 'Male'
console.log(person)



//can delete also
delete person.gender
console.log(person)