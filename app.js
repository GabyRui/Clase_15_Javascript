
/* Ejemplo de pregunta 4--------------------------- */

/* Ejemplo number */

let edad = 25;

/* Ejemplo string */

let nombre = 'Juan'

/* Ejemplo boolean */
let esMayorDeEdad = true;

/* Ejemplo Array */
let numeros = [1, 2, 3, 4, 5, 6 , 7];

/* Ejemplo Object */

let persona = {
    nombre: "Gaby",
    edad: 29,
    ciudad: "Perú"
};

/* Ejemplo Null */

let dato = null;

/* Ejemplo Undefined */

let variableSinDato;

/* Ejemplo function*/

function sumar(x, y) {
    return x + y;
}

/* Ejemplo date*/

let fechaActual = new Date ();



/* Ejemplo de pregunta 5 ---------------------------*/

function ejemploVar(){
    if (true){
        var x = 50;
    }

    console.log (x);
}

function ejemploLet() {
    if (true) {
        let y = 30;
    }
    console.log(y);
}


function ejemploConst() {
    const z = 20;
    console.log(z);
}