const { rejects } = require("assert");
const { resolve } = require("path");

function multiplicarPromise(a,b){
    return new Promise(resolve, rejects)=>{
        const resultado = a*b

        if(isNaN(resultado)){
            rejects(`ERROR NO HAY ARGUMENTOS VALIDOS`)
        }else {
            resolve(resultado)
        }
    }
}

multiplicarPromise(2,2)
.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.error(error)
})