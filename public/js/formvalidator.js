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
    // envía los datos del formulario a través de AJAX
    $.ajax({
      type: "POST",
      url: "../send.php", // reemplace con la URL de su propio archivo PHP
      data: $(form).serialize(),
      success: function(response) {
        // procesa la respuesta del servidor
        if (response === "success") {
          // muestra un mensaje de confirmación si el formulario se envió correctamente
          alert("El formulario se envió correctamente. Nos pondremos en contacto contigo lo antes posible.");
        } else {
          // muestra un mensaje de error si se produjo un error al enviar el formulario
          alert("Se produjo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        // muestra un mensaje de error si se produjo un error en la solicitud AJAX
        alert("Se produjo un error en la solicitud AJAX. Por favor, inténtelo de nuevo más tarde.");
      }
    });
  }
});

