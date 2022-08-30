

const numero = 13;
const isNumeroDivisivelPor5 = (numero % 5) === 0;

const numeroPar = (numero % 2) === 0;

if (numeroPar === 0) {
    console.log('executei');
} else if (numeroDivisivelPor5) {
    console.log('sim');
} else {
    console.log('Não');
}

