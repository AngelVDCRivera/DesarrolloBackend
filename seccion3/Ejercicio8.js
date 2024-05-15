const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciar() {
    console.log("Lista de ejercicios:");
    console.log("1. Ejercicio 1");
    console.log("2. Ejercicio 2");
    console.log("3. Ejercicio 3");
    console.log("4. Ejercicio 4");
    console.log("5. Ejercicio 5");
    console.log("6. Ejercicio 6");
    console.log("7. Ejercicio 7");

    rl.question("Digite el número del ejercicio que desea desarrollar: ", (numEj) => {
        switch (parseInt(numEj)) {
            case 1:
                ejercicio1();
                break;

            case 2:
                ejercicio2();
                break;

            case 3:
                ejercicio3();
                break;

            case 4:
                ejercicio4();
                break;

            case 5:
                ejercicio5();
                break;

            case 6:
                ejercicio6();
                break;

            case 7:
                ejercicio7();
                break;

            default:
                console.log("Solamente hay 7 ejercicios");
                break;
        }
        console.log(numEj);
    });
}

iniciar()

function ejercicio1() {
    rl.question("Ingrese un numero: ", (numero) => {
        const resultado = evaluar(numero); 
        console.log(resultado); 
        
    });

    function evaluar(numero){
        if(numero >= 1){
            return numero + " El numero es positivo";
        } else if(numero <= -1){
            return numero + " El numero es negativo";
        } else {
            return "El numero es 0";
        }
    }
}

function ejercicio2() {
    
    rl.question("Ingrese el primer numero: ", (numero1) => {
        rl.question("Ingrese el segundo numero: ", (numero2) =>{
            rl.question("Ingrese el tercer numero: ", (numero3) =>{
              
            })
        })
        const num = evaluar(numero1, numero2, numero3)
    })

    function evaluar(numero1, numero2, numero3){
        if(numero1 > numero2 && numero1 > numero3){
            return console.log(numero1+ " es mayor")
        }else if(numero2 > numero1 && numero2 > numero3){
            return console.log(numero2+ " es mayor")
        }else if(numero3 > numero1 && numero3 > numero2){
            return console.log(numero3+ " es mayor")
        }
    }
}

function ejercicio3() {
    rl.question("Ingrese un numero: ", (numero) => {
        const num = evaluar(numero)
    })

    function evaluar(numero){
        if(numero >= 1){
            return (numero + "El numero es positivo")
        }else if(numero <= -1){
            return console.log(numero + "El numero es negativo")
        }else{
            return console.log("El numero es 0") 
        }
    }
  
}

function ejercicio4() {
    
  
}

function ejercicio5() {
    rl.question("Ingrese el primero color: ", (color1) =>{
        rl.question("Ingrese el segundo color: ", (color2)=>{
            if(color1=== "azul" && color2==="amarillo"){
                console.log("la mezcla genera el color verde")
            }else if(color1=== "azul" && color2==="rojo"){
                console.log("la mezcla genera el color morado")
            }else if(color1=== "rojo" && color2==="amarillo"){
                console.log("la mezcla genera el color naranja")
            }else{
                console.log("la combinacion no se encuentra disponible")
            }
        })
    })
  
}

function ejercicio6() {
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
  
}

function ejercicio7() {
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
  
}



