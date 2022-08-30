
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const litrosGastoPorKm = 10;
const distanciaKm = 100;
const tipoCombustivel = 'etanol';

const litrosConsumidos = distanciaKm / litrosGastoPorKm;

if (tipoCombustivel === 'etanol') {
    resultado = litrosGastoPorKm * precoEtanol;
    
} else {
    resultado = litrosGastoPorKm * precoGasolina;
}

console.log(resultado.toFixed(2))