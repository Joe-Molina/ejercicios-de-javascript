//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "")=>{
    if(!cadena) return console.warn("no ingresaste una cadena de texto")
   
    if(typeof cadena!== "string") return console.error(`el valor ${cadena} no es una cadena de texto`)

    let vocales = 0,
        consonantes = 0;

        cadena = cadena.toLocaleUpperCase();
    // forof es para recorer cualquier tipo de dato que sea iterable(que se pueda recorer) 
    for (let letra of cadena) {
        if(/[AEIOOU]/.test(letra))vocales++;

        if(/[BCDFGHJKMNÑLPQRSTVWXYZ]/.test(letra))consonantes++;
        
    }

    return console.info({cadena,vocales,consonantes})

}

contarLetras("ñOño porque eres tan menso ");



//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("no ingresaste una cadena de texto")
   
    if(typeof nombre!== "string") return console.error(`el valor ${nombre} no es una cadena de texto`) 

    let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombre);

    return(expReg)
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre invalido`);
}

validarNombre();
validarNombre("joe molina");
validarNombre("joe10,35");




//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarcorreo = (nombre = "") => {
    if(!nombre) return console.warn("no ingresaste una cadena de texto")
   
    if(typeof nombre!== "string") return console.error(`el valor ${nombre} no es una cadena de texto`) 

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(nombre);

    return(expReg)
    ? console.info(`"${nombre}", es un email valido`)
    : console.warn(`"${nombre}", NO es un email invalido`);
}

validarcorreo("joedodaniljr123@gmail.com")