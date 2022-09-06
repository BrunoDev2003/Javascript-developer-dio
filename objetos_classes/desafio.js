class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constuctor(marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    } 

    calcularGastodePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat','prata',1/12);
console.log(uno.calcularGastodePercurso(70,5))

const palio = new Carro('fiat','preto',1/10);
console.log(palio.calcularGastodePercurso(70,5));
