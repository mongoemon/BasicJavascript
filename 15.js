//var - global level/functional, can be redeclared
//let - global level/block level {}, cannot be redeclared
var variable1 = 1

var variable1 = 2 // it use this one instead

if (1 == 1) // it is always true
{
	var variable1 = 3
}
console.log(variable1) // variable1 = 3

function add(a,b)
{
	var variable1 = 4 
	return a+b
}

let sum=add(2,3)
console.log(sum)
console.log(variable1) //it is 3 because it does not var in function is not declared outside