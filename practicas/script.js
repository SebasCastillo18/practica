var formulario = document.getElementById("formulario"),
    nombre = formulario.nombre,
    password = formulario.password,
    error = document.getElementById("error");



    function validarNombre(e){

        if(nombre.value == "" || nombre.value == null){
            alert("Escribe tu nombre");
           
            error.style.display = "block";
            error.innerHTML = error.innerHTMl + "<p>Escribe tu nombre</p>";
            e.preventDefault();
        }
    }

    function validarPassword(e){

        if(password.value == "" || password.value == null){
            alert("Escribe tu contraseña");
          
            error.style.display = "block";
            error.innerHTML = error.innerHTMl + "<p>Escribe tu contraseña</p>";
            e.preventDefault();
        }
    }




    function validarForm(e){

        validarNombre(e);
        validarPassword(e);
    }






    formulario.addEventListener("submit", validarForm);