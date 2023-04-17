var comentarios = document.getElementById('comentarios');
var error = document.getElementById('error');

function enviarFormulario(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if(comentarios.value === null || comentarios.value === ''){
        mensajesError.push('Comentanos lo que necesites en el campo de "Mensajes" asi podemos contactarnos contigo luego :)');
    }
    error.innerHTML = mensajesError.join()
    return false;

}