//Ejercicio 1
// Definir la clase Bebé
class Bebe {
    constructor(nombre, meses) {
        this.nombre = nombre;
        this.meses = meses;
    }

    llorar() {
        console.log(`${this.nombre}, de ${this.meses} meses, está llorando.`);
    }

    dormir() {
        console.log(`${this.nombre}, de ${this.meses} meses, está durmiendo.`);
    }

    comer() {
        console.log(`${this.nombre}, de ${this.meses} meses, está comiendo.`);
    }
}

let antonio = new Bebe("Antonio", 3);
let sonia = new Bebe("Sonia", 5);
let javier = new Bebe("Javier", 8);

antonio.llorar();
sonia.dormir();
javier.comer();

//Ejercicio 2
let fechaActual = new Date();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`)

//Ejercicio 3
let Persona ={
    peso: 170,
    estatura: 1.75,

    imc (){
        return console.log(`El IMC de la persona es: ${this.peso/Math.pow(this.estatura,2)} lb/m^2`)
    }
}
Persona.imc();
