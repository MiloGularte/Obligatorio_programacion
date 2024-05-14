// utils.js

// Función para imprimir en el HTML, recibe el id del elemento y el contenido a imprimir
export const imprimir = (elemento, contenido) => {
    document.querySelector(`#${elemento}`).innerHTML = contenido;
};
