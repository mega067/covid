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
