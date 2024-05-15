const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Didite el numero a realizar el factorial ", (n1) =>{
    let resultado = 1
    for (let i =1; i<=parseFloat(n1); i++){
        resultado *= i;
    }
    console.log("El factorial es: "+resultado)
})