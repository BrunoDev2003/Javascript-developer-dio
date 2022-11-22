//funcoes em JS sao:
//first class functions
//higher order functions

function falarMeuNome(nome) {
    console.log(nome);
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome();
    console.log("Mendonça Gusmão")
}

const referenciaNova = falarMeuNome

referenciaNova("Bruno")
falarMeuNomeCompleto(falarMeuNome)

function nomeDaFuncao() {
    console.log("nomeDaFuncao")
}

const nomeDeOutraFuncao = function () {
    console.log("nomeDeOutraFuncao")
}

nomeDaFuncao();
nomeDeOutraFuncao();

// a diferenca entre os dois é que a primeira é uma unidade só, quando o hoisiting acontece, todas as declarações são içadas lá para cima
//aqui no caso a declarações são jogadas pra cima, e a segunda função nomeDeOutraFuncao só é uma atribuição, ou seja não sofre o hositing

//declaração explícita e arrow function  

function funcao() {
    console.log(this);
}

const funcao2 = () => {
    console.log(this);
}

const bruno ={
    nome:'bruno',
    funcao,
    funcao2
}

bruno.funcao();
bruno.funcao2();

//closures

function soma(x) {
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10)

//aqui em baixo somamos o 10 com os valores abaixo, nos permitindo inverter o controle com uma facilidade grande
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
console.log(somaParcial(50))
//aqui em baixo chamamos a funcao soma que retorna outra funcao, armazenando o x no momento da criação da função, é uma característica
//do closure
console.log(soma(10)(20))