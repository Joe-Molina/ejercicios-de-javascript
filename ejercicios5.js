//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

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

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (cantidad = undefined, descuento = undefined) =>{

    if(cantidad == undefined) return console.warn("no ingresaste la cantidad");

    if(descuento == undefined) return console.warn("no ingresaste el descuento");

    if(typeof cantidad!== "number") return console.error("debes ingresar un numero");

    if(typeof descuento!== "number") return console.error("debes ingresar un numero");

    if(Math.sign(descuento) === -1 ) return console.warn("no se pueden poner descuentos negativos");

    if(descuento > 100) return console.error("no puedes poner descuentos superiores al 100%");

    porcentajeDescuento = ((descuento/100) * cantidad);

    cantidadFinal = cantidad - porcentajeDescuento;

    return console.info(`el descuento de ${descuento} % a la cantidad de ${cantidad} queda en ${cantidadFinal}`);

}

descuento(2000,50)






//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios=(fecha = undefined)=>{
    if(fecha === undefined) console.warn("no validaste la fecha");

    if(!(fecha instanceof Date)) return console.error("no ingresaste una fecha valida")

    let hoyMenosLaFecha = new Date().getTime() - fecha.getTime(),
    aniosMS = 1000*60*60*24*365
    aniosHumanos = Math.floor(hoyMenosLaFecha / aniosMS);

    return (math.sign(aniosHumanos)=== -1)
    ? console.info(`faltan ${math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos)=== 1)
        ? console.info(` han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
        : console.info(`estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios(new Date(2001,4,1))