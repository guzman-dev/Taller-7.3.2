const boton = document.getElementById("regBtn");

let nombre = document.getElementById("nombre");    
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasenia = document.getElementById("password1");
let confirmacionContrasenia = document.getElementById("password2");
let terminos = document.getElementById("terminos");

boton.addEventListener("click", validar);

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validar() {
    if (validarCamposVacios() && validarContrasenia() && checkbox()) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
}

function validarCamposVacios() {
    const arrayCampos = [nombre, apellido, email, contrasenia, confirmacionContrasenia];
    
    let hayError = false;
    for (let i = 0; i < arrayCampos.length; i++) {
        if (arrayCampos[i].value.trim().length == 0) {
            hayError = true;
            break;
        }
    }

    return !hayError;
}

function validarContrasenia() {
    return (contrasenia.value.length > 6 && contrasenia.value === confirmacionContrasenia.value);
}

function checkbox() {
    return terminos.checked;
}