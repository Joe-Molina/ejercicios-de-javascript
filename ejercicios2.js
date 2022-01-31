

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

//primer intento 
/*
const invertir = (texto)=> 
(!texto)
? console.warn("no pusiste un texto")
: console.log(texto.split("").reverse().join(""));

invertir("holas");

//profe mircha

const invertirCadena = (cadena = "")=>
(!cadena)
? console.warn("no ingresaste una cadena de texto")
: console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("hola mundo");
invertirCadena("hola mundo como estas soy tu amigo y la super heroina es acuamana");
*/
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/*

const textoEnCadena  = (cadena = "", texto = "") =>{
    if(!cadena) return console.warn("no ingresaste el texto largo");

    if(!texto) return console.warn("no ingresaste la palabra a evaluar");

    let i = 0;
    contador = 0;
    while(i!==-1){
        i = cadena.indexOf(texto, i)
        if(i!==-1){
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto} se repite ${contador} veces`);
}
textoEnCadena("hola mundo, adios mundo hola","hola");
*/

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
/*
const palindromo = (palabra = "")=> {
    if(!palabra) return console.warn("no ingresaste una pa")
    
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra == alReves)
    ? console.info(`si es palindormo, palabra original ${palabra}, palabra al reves ${alReves}`)
    : console.info(`no es palindormo, palabra original ${palabra}, palabra al reves ${alReves}`);
}

palindromo();
palindromo("hernandez");
palindromo("Salas")
*/


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
/*
const eliminarCaracteres = (texto = "",patron = "")=>
(!texto)
    ? console.warn("no ingresaste n texto")
    : (!patron)
        ? console.warn("no ingresaste patron")
        : console.info(texto.replace(new RegExp(patron,"ig"),""));
        
        
eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
*/