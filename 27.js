//class, object oreiented ,ES6 engine
class Person
{
	age = 25 // age is a properties
	//basic defining is location = Canada
	//we can use get function name and return value, treated as properties
	get location()
	{
		return "Canada"
	}
	
	//constructor is method which executes by default when you create class object
	constructor(firstName,lastName)
	{
		//first firstName belongs to the class that points to properties
		//second firstName is called instance
		this.firstName = firstName
		this.lastName = lastName
	}
	
	//method, can write in clasee
	fullName()
	{
		console.log(this.firstName+this.lastName)
	}
}

//declare a variable to class to use
let person = new Person("Tom","Jim") //paremeterize to constructor firstName and lastName
let person1 = new Person("Chris","Jones")

console.log(person.age)

console.log(person.location)

console.log(person.fullName()) //do not forget to put () if it is method
console.log(person1.fullName())