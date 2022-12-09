document.getElementById('rEnviar').addEventListener('click', function(e){

    const http = new XMLHttpRequest();
    const url = `http://127.0.0.1:3000/repartidors`;
    
    http.onreadystatechange = function(){
    
        if(this.readyState == 4 && this.status == 200){
            // Creando variable para determinar si debemos redireccionar al usuario a la sig. página
            let resultado;

            // Guardando las respuesta en una variable
            let respuestaRep = (JSON.parse(this.responseText));
            
            // Guardando los datos que nos provee el usuario desde el frontend
            let obtenerUsuario = document.querySelector("#rUsuario").value;
            let obtenerClave = document.querySelector("#rClave").value;

            // Variables para validar que los usuarios existen
            let valorDeUsuario;
            let valorDeClave;

            // Recorriendo el arreglo de los usuarios en la base de datos para saber si está registrado
            // Recorriendo el arreglo de los usuarios en la base de datos para saber si está registrado
            for(let i = 0; i < respuestaRep.length; i++){
                valorDeUsuario = respuestaRep[i].nameUser;
                valorDeClave = respuestaRep[i].pass;
                
                if(valorDeUsuario == obtenerUsuario && valorDeClave == obtenerClave){
                    console.log("Usuario Correcto");
                

                    // Enviando al usuario a la página de inicio
                    window.location.href = '../paginas/inicio.html'

                    break;
                    
                }
            }

        }
    
    }

    http.open('GET', url);
    http.send()

});
