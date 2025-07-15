function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promise esta sendo executada")
        if (true) {
            reject("404, genio")
        } else {
            setTimeout(() => {
            console.log("Resolvendo a promise...")
            resolve(42)
        }, 2000)
        }
    })
}

const p = execute()

console.log(p)
p.then((result) => {
    console.log(`Promise finalizada. Resultado: ${result}`)
}).catch((error) => {
    console.log(`Promise falhou. Erro: ${error}`)
})