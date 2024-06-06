function showExtendedText(event, className) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace

  // Muestra u oculta el texto extendido correspondiente al clic
  const extendedText = document.querySelector('.extended-text.' + className);
  const link = event.target;

  if (extendedText.style.display === 'none') {
    extendedText.style.display = 'block';
    link.textContent = 'Leer menos';
    link.parentNode.appendChild(link); // Mueve el enlace al final del contenedor
  } else {
    extendedText.style.display = 'none';
    link.textContent = 'Leer más';
    link.parentNode.appendChild(link); // Mueve el enlace al final del contenedor
  }
}
window.addEventListener('load', () => {
  const elementsToAnimate = document.querySelectorAll('.t1, .COVID-19, .INICIOS_DE_PANDEMIA, img'); // Seleccionar también imágenes

  elementsToAnimate.forEach(element => {
    if (element.tagName === 'IMG') {
      // Animación para imágenes: deslizamiento desde arriba
      element.style.opacity = 0;
      element.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }, 600); // Retraso de 500ms para las imágenes
    } else {
      // Animación para texto: aparición gradual
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.opacity = 1;
      }, 2000); // Retraso de 1000ms para el texto
    }
  });
});