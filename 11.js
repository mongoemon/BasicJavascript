//Array
//create 6 arrays
var marks = Array(6)
//Define value in each array, index start from 0
//use var to update value
var marks = new Array(20,40,35,12,37,100)

//above can be declared as following, easier
//var marks = [20,40,35,12,37,100]

//print out value from array
console.log(marks[2]) // 35

//assign new value
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]

//show array length
console.log(marks.length) //6

//add new array, move to latest
marks.push(65)
console.log(marks) //[20,40,35,14,37,100,65]

