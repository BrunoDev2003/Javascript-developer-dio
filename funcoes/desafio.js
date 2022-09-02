function escreverNome(nome) {
    console.log('Meu Nome é', + nome);
}

escreverNome('bruno');


function verificarIdade(idade) {
    if (idade < 18) {
        return("Você é abaixo da idade:", + idade);
    } else {
        return("você é acima da idade:", + idade);
    }
}

verificarIdade(19);

