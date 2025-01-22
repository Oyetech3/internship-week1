//Advanced Tasks

//Declaring array values
const players = [
    "Messi",
    "Ronaldo",
    "Ronaldinho",
    "Zidane",
    "Pele",
    "Hazard",
    "Drogba",
    "Okocha"
]

//  Destructing array and the spread operator
const [barca1,madrid1,barca2,madrid2, ...others] = players

//Display barca players
console.log(barca1,barca2)

///Display madrid players
console.log(madrid1,madrid2)

//Using foreach loop and array function to show the arrayed values from spread operator
others.forEach((value,index) => {
    console.log(index + "-" + value)
})

//Declare array of number
let numbers = [3,5,7,9,20,14,30]

//using array iteration method map to change the values to its multiples by 2
numbers.map((value) => {
    const newValue = value * 2
    console.log(newValue)
})

//using array iteration method filter to filter out numbers greater than 10
const newNum = (value) => {
    const greaterNum = value > 10
    return greaterNum
}
const filterFuction =  numbers.filter(newNum)
console.log(filterFuction)

//using reduce method to add the numbers together
const sumUp = numbers.reduce((value,total) => {
    return value + total
})
console.log(sumUp)


//Objects
const myself = {
    surname : "Oyekola",
    lastname : "Abdulqobid",
    email : "oyetech30@gmail.com"
}
//display the values with a for loop
for(let x in myself) {
    console.log(myself[x])
} 
//display the values normally 
console.log("My name is " + myself.surname + " " + myself.lastname + " and my email is " + myself.email)

//showcasing scope
let x = 10
{
    let x = 5
}
console.log(x)  //x will show 10 because let has block scope

var y = 10
{
    var y = 5
}
console.log(y)  //y will show 5 because var does not have block scope

//showing global scope and function scope
console.log(globe(x,y))
function globe(a,b) {
    return a + b + x
}


