

//hoisting

var teste1;

function teste2() {
    console.log("teste2");
}

teste1();
teste2();

teste1 = function() {
    console.log("teste1");
}

// o hositing inça as funções para cima das declarações que chamam as funções

