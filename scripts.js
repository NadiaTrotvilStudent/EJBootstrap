document.getElementById("consultaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtener los valores de los campos
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Validar correo: debe contener ".com"
    if (!email.includes(".com")) {
        alert("El correo electrónico debe contener '.com'.");
        return; // Detener el proceso si el correo no es válido
    }

    // Validar teléfono: debe ser numérico y solo puede incluir '+'
    const telefonoRegex = /^[+]?[0-9]+$/; // Permite números y un '+' opcional al inicio
    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono solo puede contener números y un '+' opcional al inicio.");
        return; // Detener el proceso si el teléfono no es válido
    }

    // Si todas las validaciones pasan
    alert("¡Gracias por enviar su consulta! Nos pondremos en contacto pronto.");
});
