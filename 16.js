//var - global level/functional
//let - global level/block level {}
let variable1 = 1


if (1 == 1)
{
	let variable1 = 2
}
console.log(variable1) // variable1 = 1, it does not run let inside {}

function add(a,b)
{
	let variable1 = 4 
	return a+b
}

let sum=add(2,3)
console.log(sum)
console.log(variable1) //it is 1, it does not run let in function as well