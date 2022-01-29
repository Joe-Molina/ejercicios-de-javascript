/*
1)Programa una función que cuente el número de caracteres
de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10.

//1er intento
/*
function contarCarac(a){
    a = console.log(a.length)
};

contarCarac("hola mundo")
*/

//2do intento

/*function contarCaracteres(cadena = ""){
    if (!cadena){
        console.warn("no ingresaste ninguna cadena");
    } else{
        console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}
contarCaracteres("hola a todos");
*/
/*
//3er intento pulido
const contarCaracteres = (cadena = "") => 
(!cadena)
? console.warn("no ingresaste ninguna cadena") 
: console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres("hola a todos");

console.clear();
/*
2)Programa una función que te devuelva el texto recortado
según el número de caracteres indicados, pe.
miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
/*
const recortarTexto = (cadena ="", longitud = 
undefined) => 
(!cadena)
? console.warn("no ingreaste el texto")
: (longitud === undefined)
? console.warn("no ingreaste la longitud a cortar")
: console.info(cadena.slice(0,longitud));

recortarTexto("hola mundo", 8)
recortarTexto();
recortarTexto("hola hola");
 */
/*
3)Programa una función que dada una String te devuelva
un Array de textos separados por cierto caracter, pe.
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
/*
const cadenaAArreglo = (cadena = "",separador = undefined)=>
(!cadena)
? console.warn("no ingreaste el texto")
: (separador === undefined)
  ? console.warn("no ingresaste el caracter separador")
  :console.info(cadena.split(separador));

  cadenaAArreglo("lorem ipsum dolor sit amet", " ");
  */
/*
  4)Programa una función que repita un texto X veces, pe.
ndomiFuncion('Hola Mu', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
/*
//lo logre xdxd
const ciclo = function(cadena = "",vecesARepetir = 1){
if (!cadena){
    return console.warn("no ingresaste la cadena") 
} else{ for (let i = 0; i < vecesARepetir; i++){
    console.info(cadena)  
}}
}

ciclo("holaSEÑORES",3);

//como lo hizo el profe
const repetirTexto = (texto = "", veces = undefined)=> {
    if(!texto)return console.warn("no ingresaste un texto"); 

    if(veces === undefined)return console.warn("no ingresaste el nuemro de veces a repetir el texto"); 

    if(veces === 0)return console.error("no se puede poner 0"); 

    if(Math.sign(veces)=== -1)return console.warn("el numero de veces no puede ser negativo"); 
    
    for (let i = 0; i < veces; i++)console.info(`${texto},${i}`); 
}

repetirTexto("hola mundo",3);
repetirTexto("hola mundo",0);
repetirTexto("hola mundo",-3);
repetirTexto("",4);
repetirTexto("hola mundo");
*/