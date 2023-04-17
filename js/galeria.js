// Selecciona las imágenes de la galería
const galleryItems = document.querySelectorAll('.gallery-item img');

// Selecciona la lightbox y sus elementos
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Agrega un evento click a cada imagen de la galería
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Muestra la lightbox
    lightbox.style.display = 'flex';
    
    // Agrega la imagen de la galería a la lightbox
    lightboxImg.src = item.src;
  });
});

// Agrega un evento click al botón cerrar de la lightbox
closeBtn.addEventListener('click', () => {
  // Oculta la lightbox
  lightbox.style.display = 'none';
});1