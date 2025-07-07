// toast.js

export const Toast = (() => {
  let toastElement = document.getElementById("toast");
  let titleElement = document.getElementById("toast-title");
  let descriptionElement = document.getElementById("toast-description");

  let toastQueue = [];
  let isToastVisible = false;

  const show = (options) => {
    const { title, description, type = "success", position = "bottom-right", duration = 5000 } = options;

    // Añadir el nuevo toast a la cola
    toastQueue.push({ title, description, type, position, duration });

    // Si no hay un toast visible, mostrar el siguiente
    if (!isToastVisible) {
      showNextToast();
    }
  };

  const showNextToast = () => {
    if (toastQueue.length === 0) return;

    const toast = toastQueue.shift();
    const { title, description, type, position, duration } = toast;

    isToastVisible = true;

    // Asignar el contenido del toast
    titleElement.innerText = title;
    descriptionElement.innerText = description;

    // Establecer la posición usando data-attributes
    toastElement.setAttribute("data-position", position);
    toastElement.setAttribute("data-type", type);

    // Mostrar el toast con la animación de entrada
    toastElement.classList.add("show");

    // Ocultar el toast después de la duración y mostrar el siguiente
    setTimeout(() => {
      toastElement.classList.remove("show");
      toastElement.classList.add("hide");

      setTimeout(() => {
        toastElement.classList.remove("hide");
        isToastVisible = false;
        showNextToast(); // Mostrar el siguiente toast si hay más en la cola
      }, 500); // Espera a que la animación de desaparición termine
    }, duration);
  };

  return {
    show,
  };
})();
