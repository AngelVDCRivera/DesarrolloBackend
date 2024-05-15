//Mescla de obgetos

let estudiantes = [
    {nombre:"Grecia", edad: 20},
    {nombre:"Luis", edad: 22},
    {nombre:"Materia", edad: 21}
]

let profesores = [
    {nombre:"Juan", materia: "Matematicas"},
    {nombre:"Medardo", materia: "Lenguaje"},
    {nombre:"Antonio", materia: "Ciencias"}
]

function conbinarobgetos(a,b){
    let comunidadEducativa =[...a, ...b]
    return comunidadEducativa
}

let comunidad = conbinarobgetos(estudiantes, profesores)
console.log(comunidad)