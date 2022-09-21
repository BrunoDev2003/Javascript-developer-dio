

const {gets, print} = require('./funcoes-auxiliares-ex1');

const valorSalarioBruto = gets();
const valorAdicionalBeneficios = gets();

function calcularPorcentagem(valor,percentual) {
    return valor * (percentual / 100);
}

function pegarPercentualImpostoComBaseNoSalario(salario) {
    if(salario >= 0.00 && salario <=  1100.00) {
        return 5.00;
    } else if(salario >= 1100.01 && salario <= 2500.00) {
        return 10;
    } else {
        return 15;
    }
}

const valorATransferir = valorSalarioBruto - (calcularPorcentagem(valorSalarioBruto, 
pegarPercentualImpostoComBaseNoSalario(valorSalarioBruto))) + valorAdicionalBeneficios;

print(valorATransferir);


