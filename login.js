function enviarDatos() {
    let hayErrores = validarCampos();
    if (hayErrores === false) {
    let email = $("#email").val();
    let password = $("#password").val();
    console.log(email);
    console.log(password);

    $.ajax({
        method: "POST",
        url: "https://reqres.in/api/users",
        data: {
            "email": email,
            "job": password,
            "apellido": "equipo",
            "dia": "hoy"
        }
    }).done(function(objetoRespuesta) {
        $(".regitro-actividad").show();
        console.log(objetoRespuesta);
        mostrarDatos(objetoRespuesta);
    })
}
}

function validarCampos() {
    let hayErrores = false;
    if ($('#email').val() === '') {
        $('#email-validacion').show();
        hayErrores = true;
    } else {
        $('#email-validacion').hide();
    }

    if ($('#password').val() === '') {
        $('#password-validacion').show();
        hayErrores = true;
    } else {
        $('#password-validacion').hide();
    }

    return hayErrores;
}

function mostrarDatos(objetoRespuesta) {
    $("#id-recibido").val(objetoRespuesta.id);
    $("#fecha-creacion").val(objetoRespuesta.createdAt);
    $("#nombre-recibido").val(objetoRespuesta.email);
    $("#trabajo-recibido").val(objetoRespuesta.job);
}