


let personas=[
    {nombre:"Sergio", edad:"33", ciudad:"San Salvador"},
    {nombre:"Martha", edad:"35", ciudad:"San Salvador"},
    {nombre:"Marleni", edad:"50", ciudad:"Santa Tecla"},
    {nombre:"Sonia", edad:"25", ciudad:"San Miguel"}
];

function buscarPorNombre(arraypersona, nombre){
    return arraypersona.find(obgeto=> obgeto.nombre === nombre)

}

let personaBuscada = buscarPorNombre(personas, "Martha");
console.log(personaBuscada)
