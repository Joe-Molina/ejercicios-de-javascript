
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined)=> {
    if(numero === undefined) return console.warn("no ingreaste el valor");

    if (typeof numero!== "number") return console.error(`el valor ${numero} no es un numero`);

    if(numero === 0) return console.error("el numero no puede ser 0");

    if(numero === 1) return console.error("el numero no puede ser 1");
    
    if(Math.sign(numero)=== -1) return console.error("el numero no puede ser negativo");

    let divisible = false;
    
    for(let i = 2; i < numero;i++){
        if((numero%i)===0){
            divisible = true;
            break;
        }
    }

    return(divisible)
    ? console.log(`el numero ${numero} no es primo`)
    : console.log(`el numero ${numero} si es primo`)
}

numeroPrimo(12);


//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


const parImpar = (numero = "")=>{
    if(!numero) return console.warn("no has ingresado un numero");

    return(numero%2 == 0)
    ? console.info(`el numero ${numero} es par`)
    : console.info(`el numero ${numero} es impar`)
}

parImpar();
parImpar(3);
parImpar(2);
parImpar(-5);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const Grados = (grados = "", escala = "" )=>{
    if(!grados) return console.warn("no has ingresado la temperatura");
    if(typeof grados!== "number") return console.warn("pon un numero en grados")
    if(!escala) return console.warn("no colocaste la escala de temperatura");

    if(escala === "C","c"){
        grados = ( grados * 9/5) + 32;

        return console.info(`${grados}°F`)

    } else if(escala === "F","f") {
        grados = (grados-32) *5/9;

        return console.info(`${grados}°C`)

        } else {
            console.warn("la escala no existe")
        }
    
}
Grados(82,"c");


