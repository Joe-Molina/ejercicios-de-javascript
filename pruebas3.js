/*
const contarPalabras = (cadena = "", texto = "") => {
    if(!cadena) return console.warn("no ingresaste un texto largo");

    if(!texto) return console.warn("no ingresaste la palabra a buscar");

    let i = 0,
        contador = 1    

   while(i !== -1){
    i = cadena.indexOf(texto,i)
    if(i !== -1){
     i++;
     contador++;
    }
   }
    console.log(`la palabra ${texto} se repite ${contador} veces`)
}

contarPalabras("hola hola hola","hola");
/*
ejercicio de contarPalabras despues de las pruebas: primero hacemos una funcion que reciba 2 parametros
la cadena completa y el texto que queremos ver cuantas veces se repite.

para eso hacemos 2 variables que las inicializamos en 0 pq iran acumulando valores. tendemos i(de indice) y contador(que contara la cantidad de veces que se repite)

usaremos el metodo indexOf que nos muestra la primera ubicacion que encuentre del texto que queremos buscar
o un -1 si este no encuentra coincidencias.

lo metemos dentro de un bucle while que se ejecutara hasta que i(el indice) sea -1, y esto pasara cuando ya no
encuentre mas concidencias el bucle.

dentro del bucle veremos que a la variable i(que vale 0 para ese entonces) se le asignara el valor del primer resultado
que muestre indexOf. 

i se inicializo en 0 ya que el segundo parametro de indexOf especifica desde que posicion del array se van a buscar
coincidenciasy esto es lo que usaremos para no repetir la misma coincidencia siempre. el valor de i(que era 0) sera reemplazado
por el numero de la pocision en la que se encontro una coincidencia, asi nunca se repetira la misma coincidencia
y cuando ya no hayan esta dara -1 poniendo fin al bucle.

tambien contador aumentara en 1 cada vez que se repita el ciclo, para despues utilizar esa varaible como las
veces que se repite la palabra o frase buscada. 
*/

/*
const palindromo = (cadena = "") => {

    cadenaInvertida = cadena.split("").reverse().join("")

    if(cadena === cadenaInvertida){
        console.log(`la palabra ${cadena} si es un palindromo`)
    }else{
        console.log(`la palabra ${cadena} no e un palindromo`)
    }

}

palindromo("nonononon");
console.clear();

10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.

const capicua = (numero) => {

    numero = numero.toString();    

    reverseNum = numero.split("").reverse().join("");

    if(numero == reverseNum){
        console.log(`${numero} si es capicua`)
    }else{
        console.log(`${numero} no e capiua :( *c achicopala*`)
    }
}
*/
/*

console.clear();

const primo = (numero) => {

    let divisible = false

for(let i = 2; i <= numero;i++){
    if((numero%i)===0){
        divisible = true;
        break;
    }
}

return(divisible)
? console.log(`el numero ${numero} no es primo`)
: console.log(`el numero ${numero} si es primo`)
}

primo(13);
*/

//programa que diga numeros impares

const parImpar = (numero = "")=>{
    if(!numero) return console.log("no has ingresado un numero")

    
    (numero%2 === 0)
    ? console.log(`${numero} es par`)
    :console.log(`${numero} no es par`)
}

parImpar(31)
