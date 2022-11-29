
const lista = [{nome: 'bruno'}, {nome: 'javier'}]


console.log(
    lista.filter((e) => e.nome.startsWith('b'))
    .join(', ')
)



console.log(lista.map((e) => e.nome).join(', '))

