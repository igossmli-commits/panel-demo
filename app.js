const boton = document.querySelector('#btnVerificar');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', () => {
  const hora = new Date().toLocaleTimeString('es-CL', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  mensaje.textContent = `JavaScript activo. Interacción verificada a las ${hora}.`;
});
