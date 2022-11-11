// Creando un arreglo vacio de repartidores
const repartidores = [];

// Generando 5 repartidores utilizando un ciclo "for"
function generarRepartidores(){

    for(let i = 0; i < 10; i++){
        let nuevoRepartidor = {
            id: i,
            usuario:  `user${i.toString()}`,
            clave: `pass${i.toString()}`
        }
        repartidores.push(nuevoRepartidor);
    }

    console.log(repartidores);
}

// Llamando nuestra funcion
generarRepartidores();