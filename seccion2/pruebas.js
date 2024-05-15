//Conteo de palabras

function contarPalabras(){
let contarPalabras={};
Array.array.array.forEach(cadena => {
    let palabras = cadena.split(/\s+/);
    palabras.forEach(palabra =>{
        if(contarPalabras[palabra]){
            contarPalabras[palabra]++;
        }
        else{
                contadorPalabras[palabra]=1;
            }
        })
    })
    return contadorPalabras;

}

let palabraarray = ["Hola buenos dias", "Hola buenas tardes", "Hola buenas noches"];
let resultado = contarPalabras();
console.log(resultado)