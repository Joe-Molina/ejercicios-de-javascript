const contarPalabras = (cadena = "", texto = "") => {
    if(!cadena) return console.warn("no ingresaste un texto largo");

    if(!texto) return console.warn("no ingresaste la palabra a buscar");


    contador = 0
    let i = 0

    while(i !== -1){
        cadena.indexOf(texto, i);
         
        if(i !== -1){
            i++;
            contador++;
        }
    }

    console.log(`${i}`);
}

contarPalabras("hola hola hola","hola");