document.getElementById("pegarBtn").addEventListener("click", function () {
    // Intenta pegar el contenido del portapapeles en el textarea
    navigator.clipboard.readText().then(function (clipboardText) {
        // Verifica si se pudo leer el contenido del portapapeles
        if (clipboardText) {
            // Coloca el contenido en el textarea
            document.getElementById("jsonTextarea").value = clipboardText;
        }
    });
});

$(document).ready(function () {
    // Selecciona el botón "Enviar" por su ID
    var enviarBtn = $("#enviarBtn");

    // Agrega un controlador de eventos al botón "Enviar"
    enviarBtn.click(function () {
        generar();
    });

    function generar(){
        // Objeto para almacenar los colores
        var colores = {
            "color1": obtenerValoresRGB($("#color1").val()),
            "color2": obtenerValoresRGB($("#color2").val()),
            "color3": obtenerValoresRGB($("#color3").val()),
            "color4": obtenerValoresRGB($("#color4").val())
        };

        // Convierte el objeto en formato JSON
        var jsonColores = JSON.stringify(colores, null, 4);

        // Muestra el JSON en el textarea
        $("#jsonTextarea").val(jsonColores);
    }

    $("#color1").change((event) => {
        var color = event.target.value;
        cambiarColor(color, "monoTorso");
        cambiarColor(color, "monoBrazoI");
        cambiarColor(color, "monoBrazoD");
        cambiarColor(color, "cascoRaya1");
        generar();
    });

    $("#color2").change((event) => {
        var color = event.target.value;
        cambiarColor(color, "monoRayaArriba");
        cambiarColor(color, "cascoRaya2");
        generar();
    });

    $("#color3").change((event) => {
        var color = event.target.value;
        cambiarColor(color, "monoRayaAbajo");
        cambiarColor(color, "cascoRaya3");
        generar();
    });

    $("#color4").change((event) => {
        var color = event.target.value;
        cambiarColor(color, "monoTrasero");
        cambiarColor(color, "monoPiernaI");
        cambiarColor(color, "monoPiernaD");
        cambiarColor(color, "cascoFrente");
        generar();
    });

    function actualizarPreview(){
        $("#color1").change();
        $("#color2").change();
        $("#color3").change();
        $("#color4").change();
    }


    function cambiarColor(color, iditem){
        try{
            document.getElementById(iditem).style.backgroundColor = color;
        }catch(e){

        }
    }

    // Función para obtener los valores RGB de un color en formato "rgb(r, g, b)"
    function obtenerValoresRGB(color) {
        // Si el valor del color es en formato hexadecimal, conviértelo a RGB decimal
        if (color.startsWith("#") && (color.length === 4 || color.length === 7)) {
            var r, g, b;

            // Elimina el símbolo "#" si está presente
            color = color.replace("#", "");

            // Maneja formatos cortos y largos (#RGB y #RRGGBB)
            if (color.length === 3) {
                r = parseInt(color[0] + color[0], 16);
                g = parseInt(color[1] + color[1], 16);
                b = parseInt(color[2] + color[2], 16);
            } else if (color.length === 6) {
                r = parseInt(color.slice(0, 2), 16);
                g = parseInt(color.slice(2, 4), 16);
                b = parseInt(color.slice(4, 6), 16);
            } else {
                // Valor de color no válido
                r = 0;
                g = 0;
                b = 0;
            }

            return {
                "r": r,
                "g": g,
                "b": b
            };
        } else {
            // Si el valor no es un formato hexadecimal válido, devuelve null
            return null;
        }
    }

    // Agrega un controlador de eventos al botón "Editar"
    $("#editarBtn").click(function () {
        try {
            parsear($("#jsonTextarea").val());
            actualizarPreview();
        } catch (error) {
            // Manejar errores de análisis de JSON
            parsear("{" + $("#jsonTextarea").val() + "}");
        }
    });

    function parsear(contenido) {
        // Intenta analizar el JSON
        var colores = JSON.parse(contenido);

        // Actualiza los valores de los campos de color
        $("#color1").val(rgbToHex("rgb(" + colores.color1.r + ", " + colores.color1.g + ", " + colores.color1.b + ")"));
        $("#color2").val(rgbToHex("rgb(" + colores.color2.r + ", " + colores.color2.g + ", " + colores.color2.b + ")"));
        $("#color3").val(rgbToHex("rgb(" + colores.color3.r + ", " + colores.color3.g + ", " + colores.color3.b + ")"));
        $("#color4").val(rgbToHex("rgb(" + colores.color4.r + ", " + colores.color4.g + ", " + colores.color4.b + ")"));
        actualizarPreview();
    }

    function rgbToHex(rgb) {
        // Verifica si el formato de entrada es "rgb(r, g, b)"
        var match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        if (match) {
            // Obtiene los valores de r, g y b desde la coincidencia
            var r = parseInt(match[1]);
            var g = parseInt(match[2]);
            var b = parseInt(match[3]);

            // Convierte los valores a formato hexadecimal
            var hexR = r.toString(16).padStart(2, '0');
            var hexG = g.toString(16).padStart(2, '0');
            var hexB = b.toString(16).padStart(2, '0');

            // Une los valores en un solo string con el formato "#rrggbb"
            var hexColor = '#' + hexR + hexG + hexB;

            return hexColor;
        } else {
            // Si el formato de entrada no es válido, devuelve el mismo valor
            return rgb;
        }
    }

    // Agrega un controlador de eventos al botón "Copiar"
    $("#copiarBtn").click(function () {
        // Selecciona el textarea por su ID (reemplaza "jsonTextarea" con el ID de tu textarea)
        var textarea = document.getElementById("jsonTextarea");

        // Verifica que el textarea exista
        if (textarea) {
            // Obtiene la longitud del contenido del textarea
            var length = textarea.value.length;

            // Selecciona desde el segundo carácter hasta el penúltimo carácter
            textarea.setSelectionRange(1, length - 1);

            // Coloca el foco en el textarea para que el usuario pueda ver la selección
            textarea.focus();
        }

        try {
            // Copia el contenido seleccionado al portapapeles
            document.execCommand("copy");
        } catch (error) {
            // Maneja errores de copia al portapapeles
            alert("No se pudo copiar el contenido al portapapeles. Puedes hacerlo manualmente.");
        }
    });
});