var miCheckbox = document.getElementById("check");

window.addEventListener("scroll", function() {
  if (miCheckbox.checked) {
    miCheckbox.checked = false;
  }
});