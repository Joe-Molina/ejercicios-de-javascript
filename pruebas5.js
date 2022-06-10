const sortt = (arr) => {

    return console.info({
        arr: arr.sort(),
        multiplicar: arr.map(arr => arr * arr),
        dividir: arr.map(arr => arr/arr),
        sumar: arr.map(arr => arr + arr)
    })

}

sortt([1,3,4,6,7,8,9,2,5])

console.clear()

const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    {nombre: "pelusa", edad: 15, raza: `perro`},
    {nombre: "pedro", edad: 8, raza: `perro`},
    {nombre: "paolo", edad: 4, raza: `perro`},
    {nombre: "mario", edad: 9, raza: `gato`},

];

console.log(numeros, mascotas)

const numerosFiltrados = numeros.filter(x => x < 5)

console.log(numerosFiltrados);

const perros = mascotas.filter(qwertyuio => qwertyuio.edad > 7)

console.log(perros)


const promedio = (arr = undefined) => {

    console.info(
        arr = arr.reduce((total, num, index, arr) => {
            total+= num;
            if(index === arr.length-1){
                return `el promedio de ${arr.join(" + ")} es ${total/arr.length}`;
            }else{
                return total;
                }


        })
    )
}

promedio([1,2,3,4,5,6,7,56,4,2,4,56,6])