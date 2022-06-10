/*
const convertirBinarioDecimal = (numero = undefined, base = undefined)=> {
    if(numero === undefined) return console.warn("no ingresaste el numero a convertir")

    if(typeof numero!== "number") return console.error(" el valor ingresado no es un numero")

    if(base === undefined) return console.warn("no ingresaste la base a convertir")

    if(typeof base!== "number") return console.error("el valor ingresado no es un numero")

    if(base === 2){
       return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`) 
    } else if (base === 10){
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
    } else {
        return console.error("el tipo de base a convertir no es valido")
    }
}

convertirBinarioDecimal();
convertirBinarioDecimal(10001010101,2);
convertirBinarioDecimal(114,10);
*/

//crea un funcion que de un descuento a una cantidad
/*
const descuento = (costo = "", descuento = "") => {

    if(!costo) return console.log("no ingresaste un costo")
    if(!descuento) return console.log("no ingresaste un descuento")
    if(Math.sign(costo)=== -1) return console.error("el costo no puede ser negativo")
    if(Math.sign(descuento)=== -1) return console.error("el descuento no puede ser negativo")

    preciofinal = costo - ((descuento/100) * costo);

    
    console.log(`el costo era ${costo} antes del descuento del ${descuento}%, ahora su precio es de ${preciofinal} `)
}

descuento(1000,20)
*/
/*
class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("hago sonidos por que estoy vivo");
    }

    temblar(){
        console.log("chiamo toy temblando ayudaaaa")
    }

    saludar(){
        console.log(`hola mi nombre es ${this.nombre} `)
    }
}

class Gato extends Animal{
    constructor(nombre,genero,tamanio){

        super(nombre,genero);
        this.tamanio = tamanio;
    }
sonar(){
    console.log("hago miau miau pq soy un gato equisde")
}
}

const shinobu = new Gato("shinobu","hembra","chikitico"),
    kitty = new Animal("kitty","mujel");

console.log(shinobu);
shinobu.sonar();

console.log(kitty);
kitty.saludar();
*/

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de 
//hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularanios = (fecha = undefined) => {
    if(fecha === undefined) return console.error("papi no pusiste la fecha que vaina es")
    
    if(!(fecha instanceof Date)) return console.error("papi esa vaina que metiste no es una fecha")

    let hoyMenosLaFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        tiempoTranscurrido = Math.floor(hoyMenosLaFecha/aniosEnMS);

        console.log(tiempoTranscurrido)
} 

calcularanios(new Date(2001,4,1));
console.clear();

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "") => {
    if(!cadena) return console.error("la cadena de texto no puedee star vacia");

    if(typeof cadena!== "string") return console.error("no haz ingresado una cadena de texto"); 
    
   

    let consonantes = 0,
            vocales = 0;

    cadena = cadena.toLocaleUpperCase;

    for (let letra of cadena){
        if(/[AEIOU]/.test(letra))vocales++;

        if(/[BCDFGHJKMNÑLPQRSTVWXYZ]/.test(letra))consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras("tasdasd");