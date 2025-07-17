function waitFor(seconds) {
    return new Promise(resolve => {
      setTimeout(resolve, seconds * 1000)  
    })
}

const numbers = [1, 2, 3, 4]

async function execute(){
    console.log("Executando...")
    console.time('map')
    const square = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))
    
    console.log(square)
    console.timeEnd('map')
}

execute()