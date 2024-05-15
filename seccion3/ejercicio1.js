

const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese un numero", (numero) => {
    //If
    if(numero >= 1){
        return (numero + "El numero es positivo")
    }else if(numero <= -1){
        return console.log(numero + "El numero es negativo")
    }else{
        return console.log("El numero es 0") 
    }
})