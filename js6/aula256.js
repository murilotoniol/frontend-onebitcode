function asyncSum(a, b){
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b){
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 30)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => console.log(results)).catch((error) => console.log(error))

const numbers = [4, 9, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number'){
            reject('erro')
        } else{
            resolve(x * x)

        }
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(error => console.log(error))