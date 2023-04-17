function enviarDatos() {
    let email = $("#email").val();
    if(email.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
      }
    let password = $("#password").val();
    if(password.length == 0) {
        alert('No has escrito nada en password');
        return;
      }
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