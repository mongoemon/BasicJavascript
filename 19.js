let date = '23'
let nextDate = '27'

/*
let diff = nextDate - date
since it variables are defined as string, it cannot calculator directly, so we have to convert from string to integer with parseInt
*/

let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)

//integer can be converted back to Integer with toString()
diff.toString()


