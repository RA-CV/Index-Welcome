const btnEliminar = document.getElementById("btnEliminar");
const alertMensaje = document.getElementById("alertMensaje");


window.addEventListener("load", function(event){
    const datos = JSON.parse(localStorage.getItem("datos")) || [];
    if (datos.length > 0){
        alertMensaje.innerHTML = `Hola ${datos[datos.length - 1].nombre}, bienvenido/a de nuevo`;
        alertMensaje.style.display = "block";
    }
});

btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("datos");
    alertMensaje.innerHTML = "Por favor, ve a index e ingresa tu nombre";
    alertMensaje.style.display = "block";
});
