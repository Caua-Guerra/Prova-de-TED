// Criar ela com tamanho
export function createPilha(tamanhoDaPilha = 10) { // Verifico se tem valor,senão, use 10
    // Criar uma array com o tamanho que pediram
    return [...new Array(tamanhoDaPilha)] // Desestruturação
}

// Inserir item
export function addItem(pilha, item) {

    if(pilha.includes(undefined)){
        const index = pilha.findIndex(element => element === undefined)
        pilha[index] = item
        console.log(`${item} foi inserido`)
        return
    }else{
        pilha.unshift(item)
        console.log(`${item} foi inserido`)
        return
    }
}

// Retirar item
export function removeItem(pilha){
    if(pilha.includes(undefined)){
        console.log(pilha[pilha.indexOf(undefined) - 1] + " foi removido")
        pilha[pilha.indexOf(undefined) - 1] = undefined
        return
    }

    console.log(pilha[pilha.length - 1] + " foi removido")
    pilha[pilha.length - 1] = undefined
    return
}

//Checar se está vazia
export function isEmpty(pilha){
    if(pilha[0] !== undefined){
        console.log("Não está vazia")
    }else{
    console.log("Está vazia")
    }
}
