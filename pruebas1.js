/* 

slice: (solo cadenas de texto) devuelve una copia de una parte del array dentro de un nuevo array empezando por incio hasta fin(el array original no se modificara)

length: la propiedad length de un objeto string regresa la llongitud de una cadena, en unidades de codigo UTF-16

split: el metodo split() divide un objeto de tipo string en un array (vector) de cadenas mediante la separacion de la cadena en subcadenas

reverse: el metodo reverse() invierte el orden ed los elementos de un array in place. el primer elemento pasa a ser el utimo y el ultimo el primero


join: une todos los elementos de una matriz(o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

indexOf: nos permite buscar un texto dentro de otra cadena de texto y devuelve la posicion en que encontro ese caracter. +
MDN: retorna el primer indice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente.
*/

textoDeEjemplo = "monogatari besto shonen"

console.log(textoDeEjemplo.slice(10,16))
console.clear()
//slice despues de las pruebas: es un metodo que sirve para recortar cadenas de texto, donde se introducen 2 parametros(el inicio y el fin)



console.log(textoDeEjemplo.length)
console.clear()
// length despues de las pruebas: regresa la longitud de una cadena de texto en numeros. ej: hola = h=1,o=2,L=3,a=4. length regresara 4.

console.log(textoDeEjemplo.split("la"))
console.clear()
//split despues de las pruebas: divide una cadena de texto haciendo las separaciones reemplazando el separador especificado.

console.log(textoDeEjemplo.split("").reverse().join("")) 
//DUDA!!!!! por que no funciona el reverse sin el 
//reverse despues de las pruebas: reverse invierte el orden de los arrays, el ultimo pasa a ser el primero y el primero el ultimo. no funciona si solo hay un array.
//join despues de las pruebas: une todos los elementos de un array en una cadena de texto.
//combinacion de split/reverse/join: split separa cada una de las letras en elementos individuales de un array, reverse las invierte y join las une nuevamente.

