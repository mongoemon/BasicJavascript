//string
//can use either single or double quotes
let day = 'tuesday '
let day2 = "wednesday"

console.log(day)
console.log(day2)

//find out how many characters
console.log(day.length) //8

//slice 4 character
let subday = day.slice(0,4)
console.log(subday)

console.log(day[1]) //u , a character represent 1 array

//split characters tue as one array and day as one array, s is separator
let splitDay = day.split("s")
console.log(splitDay[1]) // day with space
console.log(splitDay[1].length) // 4 characters
console.log(splitDay[1].trim().length) // space is cut off with trim(), so it is 3 characters

//concatenate strings with +
let newQuote = day+ " is Funday"
console.log(newQuote)
