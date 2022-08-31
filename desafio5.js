
const precoEtiqueta = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1) {
    console.log(precoEtiqeuta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}