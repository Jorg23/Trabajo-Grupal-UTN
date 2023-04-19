var miCheckbox = document.getElementById("check");

window.addEventListener("scroll", function() {
  if (miCheckbox.checked) {
    miCheckbox.checked = false;
  }
});

// BLOQUEO DE CLICK DERECHO 

const app = document.getElementById('app');

window.onload = function() {
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
} 

app.addEventListener('click', () => {
  alert('click izquierdo')
});