

const bruno = {
    nome: "Bruno Mendonça Gusmão",
    idade: 19,

    constructor(nome,idade) {
        this.nome='teste';
        this.idade=20;
    },

    descrever: function() {
        
        console.log(`meu nome é ${this.nome} e minha idade [e ${this.idade}]`);
    }
};

console.log(bruno.nome);
console.log(bruno.idade);

bruno.altura = 1.80

console.log(bruno);

bruno.descrever();

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade [e ${this.idade}]`)
    }
}

const bruno = new Pessoa('bruno',19);
const pessoa = new Pessoa('pessoa',20);

