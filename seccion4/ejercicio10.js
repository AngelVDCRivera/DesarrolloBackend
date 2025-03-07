function tarea1(){
    return new Promise(()=>{
        setTimeout(() => {
            resolve(`Tarea 1 completada`)
        }, 1000);
    })
}

function tarea2(){
    return new Promise(()=>{
        setTimeout(() => {
            resolve(`Tarea 2 completada`)
        }, 1500);
    })
}

function tarea3(){
    return new Promise(()=>{
        setTimeout(() => {
            resolve(`Tarea 3 completada`)
        }, 2000);
    })
}

Promise.all([tarea1(), tarea2(), tarea3()])
.then((resultado)=>{
    console.log("Las tareas han finalizado: ")
    resultado.foreach((resultado)=>{
        console.log(resultado)
    })

    .catch((error)=>{
        console.error(`error: `,error)
    })
})
