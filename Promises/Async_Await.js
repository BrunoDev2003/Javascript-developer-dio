
const fs = require('fs');
const path = require('path');

const filePath = require('path');

async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath);
    const textoArquivo = arquivo.ToString('utf8');
    console.log(textoArquivo);
    
}
//treinar depois o async e await com uma chamada http e outros arquivos
buscarArquivo()