function saludo() {
    const nombre = prompt("por favor, ingresa tu nombre:");
    if (nombre){
        alert("¡Bienvenido/a, ${nombre)!");
    } else{
        alert("Porfavor, ingresa tu nombre para recibir la bienvenida.");

    }
}
//llama a la funcion para probarla
saludo();