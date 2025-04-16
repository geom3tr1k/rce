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
let str_f = prompt("Введите строку")
function isPalindrome(str_f) {
    str_f = str_f.toLowerCase().replace(/\s/g, ""); 
    return str_f === str_f.split("").reverse().join("");
}

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
function uniq(arraySeven) {
    return [...new Set(arraySeven)];
}
// task 8
let str_e = prompt("Введите строку")

function countVowels(str_e) {
    const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    str_e = str_e.toLowerCase();
    let count = 0;

    for (let char of str_e) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// task 9
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// task 10

async function getDate() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const result = await response.json()
    console.log(result)
}

getDate()