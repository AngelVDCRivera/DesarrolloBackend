// Lista de datos

let listaCompras ={
    "Manzanas": 5,
    "Platanos": 3,
    "Elotes": 2,
    "Pan": 1
}

function generarListaCompras() {
    let listaLegible = "Lista de compras: \n"

    for (let elemento in listaCompras){
        listaLegible += `${elemento} : ${listaCompras[elemento]} unidades \n`
    }
    return listaLegible
}

let listaLegible = generarListaCompras(listaCompras)
console.log(listaLegible)