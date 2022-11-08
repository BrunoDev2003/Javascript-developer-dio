

//hoisting

var teste1;

function teste2() {
    console.log("teste2");
}

teste1();
teste2();

teste1 = function() {
    console.log("teste1");
}

// o hositing inça as funções para cima das declarações que chamam as funções

//tipos de dados           
/* 
    boolean
    null
    undefined
    number
    string
    symbol
*/

//object

let x = 10
x = 20
//aqui em cima o valor não é mudado em si, apenas a referencia que muda

let y = {numero: 10}
y.numero = 20

console.log(10 == '10')
//aqui em cima ele é uma comparação sem considerar o tipo
console.log(20 === '20')
//aqui emc cima é uma comparação considerando o tipo