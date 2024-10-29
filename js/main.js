const perfilContenedor = document.getElementById('perfil__contenedor');
const imagen = document.getElementById('perfil-imagen');

function dividirEnCubos() {
const cuboSize = 30; // Tamaño de cada cubo
const filas = Math.ceil(imagen.clientHeight / cuboSize); // Número de filas de cubos
const columnas = Math.ceil(imagen.clientWidth / cuboSize); // Número de columnas de cubos

for (let i = 0; i < filas; i++) {
for (let j = 0; j < columnas; j++) {
const cubo = document.createElement('div');
cubo.classList.add('cube');
cubo.style.left = `${j * cuboSize}px`;
cubo.style.top = `${i * cuboSize}px`;
cubo.style.opacity = 1; // Hacer visible el cubo
perfilContenedor.appendChild(cubo);

// Animar el cubo para que caiga
setTimeout(() => {
cubo.style.transition = 'transform 1s ease, opacity 1s ease';
cubo.style.transform = `translateY(${perfilContenedor.clientHeight}px)`;
}, Math.random() * 500); // Retardo aleatorio para la animación
}
}
}

// Iniciar la animación después de que la imagen se haya cargado
imagen.onload = () => {
dividirEnCubos();
};
document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); // Evita el envío real del formulario para la demostración

// Oculta la alerta si está visible
document.getElementById("alerta").style.display = "none";

// Muestra el mensaje de éxito
const successMessage = document.getElementById("successMessage");
successMessage.style.display = "block";
successMessage.style.animation = "fadeIn 0.5s forwards"; // Aplicar animación

// Limpiar el formulario
this.reset();

// Ocultar el mensaje de éxito después de 3 segundos
setTimeout(() => {
successMessage.style.display = "none";
}, 3000);
});

function mostrarMensaje(mensaje, tipo) {
const contactInfo = document.getElementById("contact__info");
contactInfo.textContent = mensaje;
contactInfo.className = tipo;
contactInfo.style.display = "block";

// Ocultar el mensaje después de 5 segundos
setTimeout(() => {
contactInfo.style.display = "none";
}, 1000);
}


function enviarCorreo(event) {
event.preventDefault();  // Evita el envío tradicional del formulario

// Obtener valores del formulario
const nombre = document.getElementById("nombre").value;
const correo = document.getElementById("correo").value;
const asunto = document.getElementById("asunto").value;
const mensaje = document.getElementById("mensaje").value;

// Cuerpo del mensaje en HTML
const body = `
<h3>Nuevo mensaje de contacto</h3>
<p><strong>Nombre:</strong> ${nombre}</p>
<p><strong>Correo:</strong> ${correo}</p>
<p><strong>Asunto:</strong> ${asunto}</p>
<p><strong>Mensaje:</strong></p>
<p>${mensaje}</p>
`;

// Seleccionar el contenedor del mensaje
const contactInfo = document.getElementById("contact__info");

// Enviar correo usando smtp.js
Email.send({
Host: "mail.grupodavila.cl", // Cambia al servidor SMTP de tu proveedor
Username: "devmax@grupodavila.cl",
Password: "9sjOFo9M-+vD",
To: "devmax@grupodavila.cl",  // Cambia al correo del destinatario
From: correo,  // Se envía desde el correo del usuario del formulario
Subject: asunto,
Body: body
})
.then(() => {
mostrarMensaje("Correo enviado exitosamente.", "success");
// Limpiar el formulario después de enviar
document.getElementById("contactForm").reset();
})
.catch((error) => {
mostrarMensaje(`Error al enviar el correo: ${error}`, "error");
});
}
// Mostrar el botón al hacer scroll hacia abajo
window.onscroll = function() {
let btn = document.getElementById("btnSubir");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
btn.classList.add("show");
} else {
btn.classList.remove("show");
}
};

// Función para subir suavemente al inicio de la página
function scrollToTop() {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active"); // Muestra o esconde el menú
});

// Cierra el menú si se hace clic fuera de él
window.addEventListener("click", (event) => {
if (event.target !== hamburger && event.target.closest('#nav-links') === null) {
navLinks.classList.remove("active"); // Esconde el menú
}
});