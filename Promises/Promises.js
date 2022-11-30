

const promessaNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
}, 1000)

console.log('executando')

promessaNumeroQualquer
    .then((value) => {
    console.log(value)
    return value + 10
    })
    .catch((err) => {
        console.log(err)
        
    })
    .finally(() => {
        console.log("finalizou")
    })