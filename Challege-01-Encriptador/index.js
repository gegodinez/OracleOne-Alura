/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
*/

// variables de entrada
var textIn = [["H", "o", "l", "a"], ["M", "u", "n", "d", "o", "!"], ["M", "i"], ["N", "o", "m", "b", "r", "e"], ["e", "s"], ["G", "e", "r", "s", "o", "n"], ["G", "o", "d", "i", "n", "e", "z", "."]] // "Hola Mundo! Mi nombre es Gerson Godinez."

// varibales de salida
let textOut = ""

// funncion de encriptacion
function encriptarTexto(textIn, textOut) {
    for (let i = 0; i < textIn.length; i++) {
        let word = textIn[i]
        for (let j = 0; j < word.length; j++) {
            let letter = word[j]
            switch (letter) {
                case "e":
                    word[j] = "enter"
                    break
                case "i":
                    word[j] = "imes"
                    break
                case "a":
                    word[j] = "ai"
                    break
                case "o":
                    word[j] = "ober"
                    break
                case "u":
                    word[j] = "ufat"
                    break
                default:
                    break
            }
        }
    }
}

// funcion de mostrar texto
function mostrarTexto(textIn, textOut) {
    for (let i = 0; i < textIn.length; i++){
        for (let j = 0; j < textIn[i].length; j++) {
            textOut = textOut + textIn[i][j] 
        }
        textOut = textOut + " "
    }
    console.log(textOut)
}

// Main body
encriptarTexto(textIn, textOut)
mostrarTexto(textIn, textOut)
