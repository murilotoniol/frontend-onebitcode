const media = (...numeros) => {
    const soma = numeros.reduce((accum, num) => accum + num, 0)
    const quant = numeros.length
    return soma/quant
}

console.log(media(2, 6, 3, 7, 4))
//////////////////////////////////////////////////////////////////////////////////////////////////////
const mediaPonderada = (...entradas) => {
    const mult = entradas.reduce((accum, {n, p}) => accum + n * (p ?? 1), 0)
    const peso = entradas.reduce((accum, entrada) => accum + (entrada.p ?? 1), 0)
    return mult/peso
}

console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))
//////////////////////////////////////////////////////////////////////////////////////////////////////
const mediana = (...numeros) => {
    numeros.sort((a, b) => a - b)

    const middle = Math.floor(numeros.length / 2)

    if (numeros.length % 2 === 0){
        return media(numeros[middle], numeros[middle -1])
    }

    return numeros[middle]
}

console.log(mediana(15, 14, 8, 7, 3))
//////////////////////////////////////////////////////////////////////////////////////////////////////
const moda = (...numeros) => {
    const quantidade = numeros.map((num) => [
        num,
        numeros.filter(n => num === n).length
    ])
    quantidade.sort((a,b) => b[1] - a[1])
    return quantidade[0][0]
}

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))