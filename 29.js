//add require to use from other related file
const Person = require('./28') //just to call without updating value, we use const


let person =new Person("Chris","Edward")
console.log(person.fullName())