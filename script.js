function encriptar() {
    var texto = document.getElementById('texto').value;
    var resultado = cifrar(texto, 3); // Ejemplo de desplazamiento 3, puedes cambiar este valor

    document.getElementById('resultado').value = resultado;
}

function desencriptar() {
    var texto = document.getElementById('texto').value;
    var resultado = cifrar(texto, -3); // Desplazamiento inverso para descifrar

    document.getElementById('resultado').value = resultado;
}

function cifrar(texto, shift) {
    var resultado = '';

    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i);
        if (char.match(/[a-z]/i)) {
            var code = texto.charCodeAt(i);
            var newCode = code + shift;

            if (char.match(/[a-z]/)) {
                if (newCode > 122) {
                    newCode -= 26;
                } else if (newCode < 97) {
                    newCode += 26;
                }
            } else if (char.match(/[A-Z]/)) {
                if (newCode > 90) {
                    newCode -= 26;
                } else if (newCode < 65) {
                    newCode += 26;
                }
            }

            resultado += String.fromCharCode(newCode);
        } else {
            resultado += char;
        }
    }

    return resultado;
}