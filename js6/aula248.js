console.log("iniciando")

// const timerTimeOut = setTimeout(() => {
//     console.log("oi")
// }, 1000 * 3)

// clearTimeout(timerTimeOut)
let segundos = 0

const timerInterval = setInterval(() => {
    segundos += 3
    console.log(`foram ${segundos}`)
    if (segundos >= 12 ){
        clearInterval(timerInterval)
    }
}, 1000 * 3)