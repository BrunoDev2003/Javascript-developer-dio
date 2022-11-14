
const pessoa = {
    genero: 'masculino'
}

const bruno = {
    nome: 'bruno', 
    idade: 19,
    __proto__: pessoa
}



console.log(bruno.genero)