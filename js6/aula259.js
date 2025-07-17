async function asyncSum(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be numbers')
    }
    return a + b
}

// async function execute() {
//     asyncSum(50,30).then((result) => {
//         console.log(result)
//     })
// }

async function execute() {
    try {
        const result = await asyncSum(true,30)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
    
execute()