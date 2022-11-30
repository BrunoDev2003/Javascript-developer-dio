

const fs = require('fs')

const promessaFileRead = fs.promises.readFile('tarefas.csv')

promessaFileRead.then((arquivo) => {
    console.log( arquivo.toString('utf8'))
    
}).catch((err) => {
    console.log("deu ruim", err)
    
})

//07:27