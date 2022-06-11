//string
//can use either single or double quotes
let day = 'tuesday '

console.log(day)

//concatenate strings with +
let newQuote = day+ " is Funday"
console.log(newQuote)

//if you want to find second 'day', we can includes the start point as below
let val = newQuote.indexOf("day",5) 
console.log(val) // 14

//find how many 'day' is available
//tuesday is Funday
let count = 0
let value = newQuote.indexOf("day") 
while (value!== -1)
{
	count++ //2
	value = newQuote.indexOf("day",value+1)
	console.log("count value is "+ count)
}
console.log(count)