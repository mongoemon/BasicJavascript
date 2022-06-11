// use && for and comparison
// use || for or operator
// result become true or false
let n = 0
for(let k=1;k<=100;k++)
{
	if(k%2 == 0 && k%5 == 0) // check even number and check mod 5
	{
	console.log(k)
	//n count 3 times and if n equal 3, code will stop with break function 
	n++
	if(n == 3)
	break
	}
}
//output is 10 20 30