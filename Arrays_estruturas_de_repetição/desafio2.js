// crie um programa que seja capaz de percorrer uma lista de números e imprima cada múmero Par encontrado


const numeros = [0,7,12,15];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero)
    }
}