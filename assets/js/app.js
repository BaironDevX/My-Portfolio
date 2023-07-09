/*=============== BURGER MENU FOR NAVBAR ================*/

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener("click", () => {
    ul.classList.toggle("show"); //Show ul elements
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

// Se recorren todos los enlaces con un bucle for each:
navLink.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

