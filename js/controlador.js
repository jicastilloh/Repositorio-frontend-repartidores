// Creando un arreglo vacio de repartidores
const repartidores = [];

// Generando 5 repartidores utilizando un ciclo "for"
function generarRepartidores(){

    for(let i = 0; i < 5; i++){
        let nuevoRepartidor = {
            id: i,
            usuario:  `usuario${i.toString()}`,
            clave: `clave${i.toString()}`
        }
        repartidores.push(nuevoRepartidor);
    }

    console.log(repartidores);
}

// Llamando nuestra funcion
generarRepartidores();