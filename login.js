function enviarDatos() {
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

function mostrarDatos(objetoRespuesta) {
    $("#id-recibido").val(objetoRespuesta.id);
    $("#fecha-creacion").val(objetoRespuesta.createdAt);
    $("#nombre-recibido").val(objetoRespuesta.email);
    $("#trabajo-recibido").val(objetoRespuesta.job);
}