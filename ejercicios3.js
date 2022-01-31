//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroRamdom = (n1,n2)=>{
    if(!n1)console.warn("no pusiste el numero de inicio")
    if(!n2)console.warn("no pusiste el numero final")

    console.log(Math.round(Math.random()*(n2 - n1) + n1))
    
}

numeroRamdom(501,600)



//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0)=>{
    if(!numero) return console.warn("no ingresaste un numero")
    if(typeof numero!== "number") return console.error(`el valor ${numero} ingresado no es un numero`);
    
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ? console.info(`si es capicua, numero original ${numero}, numero al reves ${alReves}`)
    : console.info(`no es capicua, numero original ${numero}, numero al reves ${alReves}`);
}

capicua(2000);
capicua(99.99)


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined)=>{
    if(numero === undefined) return console.warn("no ingresate un numero");

    if(typeof numero!== "number") return console.error(`el valor ${numero} ingresado, no es un numero`);

    if(numero === 0) return console.error("el numero no puede ser 0")

    if(Math.sign(numero)=== -1) return console.error("el numero no puede ser negativo");

    let factorial = 1;

    for(let i = numero; i > 1; i--){
        factorial*= i;
    }

    return console.info(`el factorial de ${numero} es ${factorial}`);
}

factorial(0);
factorial("5");
factorial([1,2,3]);
factorial(-5);
factorial(5);
factorial(8)