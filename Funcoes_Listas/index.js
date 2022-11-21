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
