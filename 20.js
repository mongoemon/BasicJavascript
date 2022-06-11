//string
//can use either single or double quotes
let day = 'tuesday '
let day2 = "wednesday"

console.log(day)

//concatenate strings with +
let newQuote = day+ " is Funday"
console.log(newQuote)

let val = newQuote.indexOf("day")
console.log(val) // 4 , mean there 4 characters number before word 'day' appear

//if you want to find second 'day', we can includes the start point as below
//let val = newQuote.indexOf("day",5) 
//console.log(val) // 14