let numeroDePrueba = 1001;
let textoDePrueba = "qlq wladimil, todo fino";

console.log(Math.round())
console.clear()

 console.log(Math.round(Math.random()*(100)+500))
 //math.round despues de las pruebas: redondea el numero y sha.
 //math.random despues de las pruebas: te da aleatoriamente un 0 o un 1, pero puedes hacer operaciones matematicas para que el rango este en donde quieras.

 console.log(numeroDePrueba.toString())
console.clear()
 if(numeroDePrueba.toString == 1001){
     console.log("pta no c que e entonce")
 }else{
     console.log("a pta si es diferente xd")
 }
 //toSring despues de las pruebas: cambia los elementos numericos a strings.(solo se puede usar en elementos number)
console.clear()
const capicua = (numero)=>{
    
numero = numero.toString();
let revez = numero.split("").reverse().join("");

if(numero === revez){
    console.log("e capicuaaaaaa")
} else {
    console.log("no e capicua. *c achicopala*")
}

}

capicua(101)
console.clear();
// ejercicio de numeros capicuos despues de las pruebas: basicamente pasas el numero a texto y despues haces una copia con los elementos invertidos, para luego compararlos a ver si son iguales.


console.log(textoDePrueba.indexOf("todo",15))
// indexOf despues de las pruebas: el metodo indexOf retorna la primera pocision en la que se encuentra el texto que buscas en el array. en el segundo parametro puedes poner la pocision del array en la que deseas empezar a buscar.

console.clear()



const contarPalabras = (cadena = "", texto = "") => {
    if(!cadena) return console.warn("no ingresaste un texto largo");

    if(!texto) return console.warn("no ingresaste la palabra a buscar");

    let contador = 0
    let i = 0

    while(i !== -1){
        cadena.indexOf(texto, i);
         
        if(i !== -1){

            i++;
            contador++;
        }
    }

    console.log(contador)
}
console.log("tengo hambre")



contarPalabras("tu mama es pta p tu mama no se baña y si tu mama c bañara no seria tu mama.", "tu mama")
