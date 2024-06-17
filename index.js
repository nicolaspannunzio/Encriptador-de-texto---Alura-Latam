//? Asegurar que el DOM esté completamente cargado antes de ejecutar el código
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("textarea").forEach((element) => {
    element.style.height = `${element.scrollHeight}px`;
    element.addEventListener("input", (event) => {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    });
  });
});

const btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener("click", copyToClipboard);

//? Copiar el contenido del elemento con clase .msj-encrypt al portapapeles.
function copyToClipboard() {
  const element = document.querySelector(".msj-encrypt");
  const innerHTML = element.innerHTML;
  navigator.clipboard.writeText(innerHTML)
    .then(() => console.log("Texto copiado al portapapeles"))
    .catch((err) => console.error("Error al copiar el texto: ", err));
}

//? Encriptar el texto reemplazando caracteres específicos con sus respectivos códigos.
function encrypt(text) {
  let encryptedText = "";
  for (let char of text) {
    switch (char) {
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "a":
        encryptedText += "ai";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += char;
    }
  }
  return encryptedText;
}

//? Desencriptar el texto reemplazando códigos específicos con sus caracteres originales.
function decrypt(text) {
  const rules = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
}

function decrypt(text) {
    const decryptionRules = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionRules[match]);
}

//? Elementos del DOM utilizados para encriptar y desencriptar mensajes. Configuración de los botones y secciones
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const inputEncriptar = document.querySelector(".inputEncriptar");
const msjEncrypt = document.querySelector(".msj-encrypt");
const imgMsjEncryptSection = document.querySelector(".img-msj-encrypt-section");
const msjEncryptSection = document.querySelector(".msj-encrypt-section");
imgMsjEncryptSection.style.display = "block";
msjEncryptSection.style.display = "none";

//? Alternar la visibilidad de las secciones según el botón seleccionado.
function toggleMessageSection(showEncryptSection) {
  imgMsjEncryptSection.style.display = showEncryptSection ? "none" : "block";
  msjEncryptSection.style.display = showEncryptSection ? "block" : "none";
}

//? Añadir eventos de click para los botones de encriptar y desencriptar
btnEncriptar.addEventListener("click", () => {
  msjEncrypt.textContent = encrypt(inputEncriptar.value);
  toggleMessageSection(true);
});

btnDesencriptar.addEventListener("click", () => {
  msjEncrypt.textContent = decrypt(inputEncriptar.value);
  toggleMessageSection(true);
});