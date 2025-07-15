function calculateIMC(weight, heigh) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof weight !== 'number' || typeof heigh !== "number") {
                reject("Os dados nao sao numericos")
                return
            }
            const resultado = weight/(heigh * heigh)

            resolve(resultado)
        },1500)
    })
}

const p = (weight, heigh) => {
    calculateIMC(weight, heigh).then((result) => {
        console.log(`IMC: ${result.toFixed(2)}`)
        if (result < 18.5) {
            console.log("Magreza")
        } else if (result >= 18.5 && result < 25) {
            console.log("Normal")
        } else if (result >= 25 && result < 30) {
            console.log("Sobrepeso")
        } else if (result >= 30 && result < 40) {
            console.log("Obesidade")
        } else {
            console.log("Obesidade grave")
        }
    }).catch((error) => {
        console.log(`Falha: ${error}`)
    })
    console.log("Funcao assincrona chamada...")
}

p(75, 1.76)