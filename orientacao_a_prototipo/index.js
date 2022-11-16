
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

function Pessoa(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}
pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

console.log(bruno.genero)

bruno.falar()

//06:30