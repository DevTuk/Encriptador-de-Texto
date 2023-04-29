const textEncripted = document.getElementById("texto");
const textAreaDecript = document.getElementById("texto-encriptado");
const imgBloque = document.getElementById("msj-cripted");
const imgLottie = document.getElementById("imagen-bloque");

function detectarTexto() {
  const tieneTexto = textEncripted.value !== "";
  imgBloque.style.display = tieneTexto ? "none" : "flex";
  imgLottie.style.display = tieneTexto ? "none" : "flex";
  textAreaDecript.value = textEncripted.value;
}

function validarTexto(texto) {
  const validacion = /^[a-z\s]+$/;
  return validacion.test(texto);
}

function procesarTexto(proceso) {
  let textoProcesado = "";
  const textoEncriptado = textEncripted.value;

  if (!validarTexto(textoEncriptado)) {
    textoProcesado =
      "Entrada inválida: El campo no puede estar vacío y solo se permiten letras minúsculas sin números y sin acentos.";
  } else {
    textoProcesado = proceso(textoEncriptado);
  }

  textAreaDecript.value = textoProcesado;
}

function encriptarTexto(texto) {
  const letrasOriginales = ["a", "e", "i", "o", "u"];
  const letrasReemplazo = ["ai", "enter", "imes", "ober", "ufat"];
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    const index = letrasOriginales.indexOf(letra);
    if (index >= 0) {
      resultado += letrasReemplazo[index];
    } else {
      resultado += letra;
    }
  }

  return resultado;
}

function desencriptarTexto(texto) {
  const mapaEncriptado = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  return texto.replace(
    /ai|enter|imes|ober|ufat/g,
    (match) => mapaEncriptado[match]
  );
}

function encriptar() {
  procesarTexto(encriptarTexto);
}

function desencriptar() {
  procesarTexto(desencriptarTexto);
}

textEncripted.addEventListener("input", detectarTexto);

/* 
El código comienza seleccionando los elementos HTML relevantes y almacenándolos en variables. La función detectarTexto() se llama cada vez que se detecta un cambio en el campo de entrada. Verifica si hay algún texto en el campo de entrada, y si no lo hay, muestra una imagen y animación que indican que se debe ingresar algún texto. Si hay texto, se oculta la imagen y se muestra el área de texto de salida.

Las funciones procesarTexto(), encriptarTexto(), y desencriptarTexto() son responsables de realizar la encriptación y desencriptación. procesarTexto() toma una función de procesamiento como argumento y la usa para procesar el texto de entrada. Si el texto de entrada no cumple con ciertas restricciones (es decir, contiene caracteres que no son letras minúsculas), se devuelve un mensaje de error. En caso contrario, se llama a la función de procesamiento adecuada.

La función encriptarTexto() utiliza una lista de letras originales y sus correspondientes letras de reemplazo para crear un nuevo texto encriptado. Se itera a través de cada letra en el texto de entrada y se comprueba si está en la lista de letras originales. Si lo está, se reemplaza con la letra correspondiente en la lista de letras de reemplazo. Si no, se agrega la letra original al resultado.

La función desencriptarTexto() realiza la operación inversa, utilizando un mapa de letras encriptadas y sus letras originales correspondientes para desencriptar el texto de entrada. Se utiliza una expresión regular para buscar todas las coincidencias de letras encriptadas y reemplazarlas con su letra original correspondiente.

Finalmente, hay dos funciones que llaman a procesarTexto() con la función de procesamiento adecuada (encriptar() y desencriptar()). Estas funciones se llaman cuando el usuario hace clic en los botones de encriptar y desencriptar.

*/
