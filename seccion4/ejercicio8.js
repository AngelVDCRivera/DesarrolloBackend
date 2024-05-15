function dividir(a, b){
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject(`El divisor es cero`)
        }else {
            const resultado = a/b
            resolve(resultado)
        }
    })
   
}

dividir(10,5)
    .then((resultado)=>{
        console.log("Resultado es: ", resultado)
    })
    .catch((error)=>{
        console.log(error)

    })