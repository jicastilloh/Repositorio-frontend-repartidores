let enviar = document.querySelector("#rEnviar");
let resultado = false;

enviar.addEventListener("click", validator);


function validator(){
    let obtenerUsuario = document.querySelector("#rUsuario").value;
    let obtenerClave = document.querySelector("#rClave").value;

    let valorDeUsuario;
    let valorDeClave;

    for(let i = 0; i < repartidores.length; i++){
        
        valorDeUsuario = repartidores[i].usuario;
        valorDeClave = repartidores[i].clave;
        
        if(valorDeUsuario == obtenerUsuario && valorDeClave == obtenerClave){
            console.log("Correcto");
            resultado = true;
            break;
        }
    }

    if(resultado == false){
        console.log("Usuario no registrado");
    }

}
