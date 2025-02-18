// JavaScript para interactividad (opcional)
document.addEventListener("DOMContentLoaded", function () {
    // Ejemplo de interacción: Cambiar el color del título al hacer clic
    const headerTitle = document.querySelector("header h1");
    headerTitle.addEventListener("click", function () {
        headerTitle.style.color = "#FFD700"; // Cambia el color a dorado
    });

    // Ejemplo de interacción: Mostrar un mensaje al pasar el mouse sobre el logo
    const logo = document.querySelector(".logo");
    logo.addEventListener("mouseover", function () {
        alert("¡Bienvenido a Valle Grande!");
    });
});