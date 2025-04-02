// task 1
let a = prompt('Введите число a')
function more(a) {
    if (a > 18) {
        console.log(true)
    } else {
        console.log(false)
    }
}
more(a)


// task 2

let b = prompt('Введите число b')

function honest(b) {
    if (b % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

honest(b)
// task 3

let word = prompt('Введите число c')

function reverse(word) {
    let wordNew = word.split("").reverse().join("")
    console.log(wordNew)
}

reverse(word)
// task 4

// task 5
let number = prompt("Введите число")
let numbers = []
function sum(number) {
    numbers = number.split("")
    let fin = parseInt(numbers[0]) + parseInt(numbers[number.length-1])
    console.log(fin)
}
sum(number)
// task 6

let  array = [1, 2, 11, 34, 3, 44]
let newSum = []
let sumSix = 0
function findArray(array) {
    for (let arr of array) {
        if (arr > 0 && arr <= 10) {
            newSum.push(arr)
        }
    }
    for (let i = 0; i < newSum.length; i++) {
        sumSix = sumSix + newSum[i];
    }
    console.log(sumSix)
}

findArray(array)
// task 7
let  arraySeven = [1, 2, 2, 11, 11, 34, 3, 44]
let newArray = []

// task 8
// task 9
// task 10