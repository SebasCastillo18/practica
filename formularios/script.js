var formulario = document.getElementById("formulario"),
    nombre = formulario.nombre,
    correo = formulario.correo;
(sexo = formulario.sexo), (terminos = formulario.terminos);
error = document.getElementById("error");

function validarNombre(e) {
    if (nombre.value == "" || nombre.value == null) {
        error.style.display = "block";
        error.innerHTML = error.innerHTML + "<li>Por favor escribe tu nombre</li>";
        e.preventDefault();
    }
}

function validarCorreo(e) {
    if (correo.value == "" || correo.value == null) {
        error.style.display = "block";
        error.innerHTML = error.innerHTML + "<li>Por favor escribe tu correo</li>";
        e.preventDefault();
    }
}

function validarSexo(e) {
    if (sexo.value == "" || sexo.value == null) {
        error.style.display = "block";
        error.innerHTML =
            error.innerHTML + "<li>Por favor selecciona tu genero</li>";
        e.preventDefault();
    }
}

function validarTerminos(e) {
    if (terminos.checked == false) {
        error.style.display = "block";
        error.innerHTML =
            error.innerHTML + "<li>Por favor acepta los terminos</li>";
        e.preventDefault();
    }
}

function validarFormulario(e) {
    error.innerHTML = "";

    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
}

formulario.addEventListener("submit", validarFormulario);
