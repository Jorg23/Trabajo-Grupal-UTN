$("form[name='contacto']").validate({
  rules: {
    name: {
      required: true
    },
    lastname: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    comentarios: {
      required: true
    }
  },
  messages: {
    name: {
      required: "<font color='red'>Por favor, ingrese su nombre"
    },
    lastname: {
      required: "<font color='red'>Por favor, ingrese su apellido"
    },
    email: {
      required: "<font color='red'>Por favor, ingrese su dirección de correo electrónico",
      email: "<font color='red'>Por favor, ingrese una dirección de correo electrónico válida"
    },
    comentarios: {
      required: "<font color='red'>Por favor, ingrese un comentario para que podamos recibir este formulario"
    },
  },
  submitHandler: function(form) {
    // muestra la confirmación en verde si se envió correctamente
    $("#mensaje-confirmacion").text("El formulario se envió correctamente").css("color", "green");

        // resetea el formulario después de 1 segundo
        setTimeout(function() {
          form.reset();
          $("#mensaje-confirmacion").removeClass("text-danger").text("");
        }, 2000);

        return false; // evita que se envíe el formulario de manera predeterminada
  }
});
