const {gets, print} = require('./FuncoesAuxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    numerosSorteados.push(numerosSorteados);
}

let maiorvalor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorvalor) {
        maiorvalor = numeroSorteado;
    }
}

print(maiorvalor);