const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("Name");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let datos = JSON.parse(localStorage.getItem("datos")) || [];
let contador = datos.length;

btnGuardar.addEventListener("click", function(event) {
    event.preventDefault();
    
    txtNombre.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    let isValid = true;

    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML = "Por favor, ingresa un <strong>Nombre</strong> válido.";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        contador++;
        let elemento = { "nombre": txtNombre.value };
        datos.push(elemento);
        localStorage.setItem("datos", JSON.stringify(datos));
        txtNombre.value = "";
        txtNombre.focus();
    }
});

