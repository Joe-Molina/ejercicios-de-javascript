//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados =(arr=undefined)=>{
    if(arr === undefined) return console.warn("no iingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("el arreglo esta vacio");

    for (const num of arr) {
        if(typeof num!== "number")return console.warn("el valor no es un numero")
        
    }

    const newArr = arr.map(el => el * el);

    return console.info(`arreglo original ${arr},\nAreglo elevado al cuadrado. ${newArr}`)
}

devolverCuadrados([4,6,8])



console.clear();


//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined)=>{
    if(arr === undefined) return console.warn("no iingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("el arreglo esta vacio");

    for (const num of arr) {
        if(typeof num!== "number")return console.warn("el valor no es un numero")
        
    }

    return console.info(`arreglo original:${arr}\nvalor mayor: ${Math.max(...arr)}\nvalor menor${Math.min(...arr)}`)
}

arrayMinMax([1,2,3,4,5,66,-4]);






//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParImpar =(arr = undefined)=>{
    if(arr === undefined) return console.warn("no iingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("el arreglo esta vacio");

    for (const num of arr) {
        if(typeof num!== "number")return console.warn("el valor no es un numero")
        
    }

    return console.info({
        pares: arr.filter(num=>num%2 === 0),
        impares: arr.filter(num=>num%2 === 1)
    })
}

separarParImpar([1,2,3,4,5,6,7,8,9])