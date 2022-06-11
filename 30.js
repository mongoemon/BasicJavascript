//Inheritance is the main pillar in object oriented programming
//one class can inherit/acquire the properties, methods of another class
//The class which inherit the properties of other is known as subclass(derived class, child class
//The class whose properties are inherited is known as superclass or parent class

// This scenario we create Pet class which inherit from Person class

const Person = require('./28')
class Pet extends Person

{
	// this get will overide parent classe
	// if we comment it, output is canada
	get location()
	{
		return "BlueCross"
	}
	
	constructor(firstName,lastName)
	{
		//call parent class constructor
		super(firstName,lastName)
	}
}
let pet = new Pet("sam","san")
pet.fullName()
console.log(pet.location)