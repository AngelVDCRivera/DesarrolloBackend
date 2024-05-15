function tarea1(){
    return new Promise(()=>{
        setTimeout(() => {
            resolve(`Tarea 1 completada`)
        }, 3000);
    })
}

function tarea2(){
    return new Promise(()=>{
        setTimeout(() => {
            resolve(`Tarea 2 completada`)
        }, 3000);
    })
}

function tarea3(){
    return new Promise(()=>{
        setTimeout(() => {
            resolve(`Tarea 3 completada`)
        }, 3000);
    })
}

Promise.all([tarea1(), tarea2(), tarea3()])
.this((resultado)=>{
    console.log("Las tareas han finalizado: ")
    resultado.foreach((resultado)=>{
        console.log(resultado)
    })

    .catch((error)=>{
        console.error(`error: `,error)
    })
})

