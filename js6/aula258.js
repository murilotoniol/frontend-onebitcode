async function asyncSum(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be numbers')
    }
    return Promise.resolve(a + b)
}

async function asyncSubtract(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be numbers')
    }
    return Promise.resolve(a - b)
}

const sumResult = asyncSum(50, 30)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})