const list = [1,2,3,4,5,6,7,8,9,10]

list.forEach((val, i, listRef) => {
    console.log(val, i, listRef)
})

list.forEach(cb)

for (let i = 0; i < list.length; i++) {
    const element = array[i];
    cb(element,i,list)
}

const listadeNumerosPares = list.filter(element => {
    return (element % 2 === 0)
})

console.log(list)
console.log(listadeNumerosPares)

class Pessoa {
    constructor(name) {
        this.name = name 
    }
}

const lista = (new Pessoa('Bruno', new Pessoa('Renan'), new Pessoa('Andreia')))


const listaEmHtml = lista.map(element => {
    return `
        <li>
            ${element.name}
        </li>
    `
})


/*const listaNomes = []

for (let i = 0; 1 < lista.length; i++) {
    const element = lista[i];
    listaNomes.push(element.name)
}

console.log(listaNomes)
*/