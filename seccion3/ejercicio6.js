const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite el numero de mes a conocer: ", (nMes)=>{
    let nombreMes
    switch(parseInt(nMes)){
        case 1:
            nombreMes="Enero";
            breack;

        case 2:
            nombreMes="Febrero";
            breack;

        case 3:
            nombreMes="Marzo";
            breack;

        case 4:
            nombreMes="Abril";
            breack;

        case 5:
            nombreMes="Mayo";
            breack;

        case 6:
            nombreMes="Junio";
            breack;

        case 7:
            nombreMes="Julio";
            breack;
    
        case 8:
            nombreMes="Agosto";
            breack;
    
        case 9:
            nombreMes="Septiembre";
            breack;
    
        case 10:
            nombreMes="Octubre";
            breack;
    
        case 11:
            nombreMes="Nobiembre";
            breack;
    
        case 12:
            nombreMes="Diciembre";
            breack;

        default:
            nombreMes="Numero de mes no existe";
            break;
    }
    console.log("nombreMes")
})