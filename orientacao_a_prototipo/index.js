
/*
const pessoa = {
    genero: 'masculino'
}

const bruno = {
    nome: 'bruno', 
    idade: 19,
    __proto__: pessoa
}

*/
/*
function Pessoa(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}
pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

console.log(bruno.genero)

bruno.falar()
*/
//criação de um objeto baseado em outro, objeto literal 

const pessoa = {
    genero: 'masculino'
}

const bruno ={
    name: 'bruno',
    __proto__: pessoa
}

console.log(bruno)

//segunda forma com o object.create

const bruno = Object.create(pessoa)

bruno.nome = "bruno"

console.log(bruno.genero)

//operador new  

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade 
}

console.log(new Pessoa('bruno', 19))

