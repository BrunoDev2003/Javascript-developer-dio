
const entradas = [5,50,10,23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};

// essas funções auxiliares são basicamente uma forma de depuração/debugging.