const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el primer numero: ", (numero1) => {
    rl.question("Ingrese el segundo numero: ", (numero2) =>{
        rl.question("Ingrese el tercer numero: ", (numero3) =>{
            if(numero1 > numero2 && numero1 > numero3){
                return console.log(numero1+ " es mayor")
            }else if(numero2 > numero1 && numero2 > numero3){
                return console.log(numero2+ " es mayor")
            }else if(numero3 > numero1 && numero3 > numero2){
                return console.log(numero3+ " es mayor")
            }

        })
    })
})