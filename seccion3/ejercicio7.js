const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite la categoria del vehiculo: ", (categoria)=>{
    let tipoVehiculo
    switch(categoria){
        case `Moto`:
            tipoVehiculo="Motocicleta";
            breack;

        case `Auto`:
            tipoVehiculo="Automovil";
            breack;

        case `Camion`:
            tipoVehiculo="Super camion";
            breack;

        case `Bicicleta`:
            nombreMes="Super bicicleta";
            breack;

        default:
            nombreMes="La categoria digitada no existe";
            break;
    }
    console.log(tipoVehiculo)
})