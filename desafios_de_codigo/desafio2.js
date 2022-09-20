//Faça um programa que recebe N e seus respectivos valores, Imprima o maior número par e o menor número impar.

const {gets, print} = require('./funcoes-auxiliares-ex1');

const num = gets();
let maiorNumPar = 0;
let menorNumImpar = 0;

for (let i = 0; i < num; i++) {
    const numero =gets();
    if(numero % 2 === 0) {
        if(numero > maiorNumPar) {
            maiorNumPar = numero;
        }
    } else {
        if(menorNumImpar === 0) {
            menorNumImpar = numero;
        } else if(numero < menorNumImpar) {
            menorNumImpar = numero;
        }
    }

    
}

print(menorNumImpar);
print(maiorNumPar);