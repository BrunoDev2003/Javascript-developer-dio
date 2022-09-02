

function SayMyName(name) {
    console.log('Your name is:' + name);
}

SayMyName('Bruno');

function IncrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(IncrementarJuros(100, 100));
console.log(IncrementarJuros(100,15));
console.log(IncrementarJuros(100,20));