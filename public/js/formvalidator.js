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
        required: "Por favor, ingrese su nombre"
      },
      lastname: {
        required: "Por favor, ingrese su apellido"
      },
      email: {
        required: "Por favor, ingrese su dirección de correo electrónico",
        email: "Por favor, ingrese una dirección de correo electrónico válida"
      },
      comentarios: {
        required: "Por favor, ingrese un comentario para que podamos recibir este formulario"
      },
      
    },
    submitHandler: function(form) {
      enviarFormulario();
    }
  });
  