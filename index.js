import { createPilha, addItem, removeItem, isEmpty } from './pilha.js' // Chamando do outro arquivo

let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianças",
        paginas: 50,
        genero: "clássico",
    },
]

const pilhaDeLivros = createPilha(5) // Criando com tamanho X
console.log(pilhaDeLivros)
for(let i = 0; i < alunos.length; ++i){
    const livro = alunos[i].titulo
    addItem(pilhaDeLivros, livro)
}

console.log(pilhaDeLivros)
isEmpty(pilhaDeLivros)

for(let i = 0; i < alunos.length; ++i){
    const livro = alunos[i].titulo
    removeItem(pilhaDeLivros)
    // console.log(pilhaDeLivros)
}

console.log(pilhaDeLivros)

isEmpty(pilhaDeLivros)