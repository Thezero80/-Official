const validEmails = ["miguel.fabian@unas.edu.pe", "hans.mays@unas.edu.pe"];
const validCodes = ["0020230386", "0020230321"];
let timeoutId;

const getValueInput = () => {
    let email = document.getElementById("usuario").value;
    let code = document.getElementById("password").value;

    // Basic client-side validation (optional)
    if (!email || !code) {
        document.getElementById("error-login1").innerHTML = "Por favor, ingresa tu correo y código.";
        return;
    }

    // Check if email and code are valid
    const validIndex = validEmails.indexOf(email);
    if (validIndex === -1 || validCodes[validIndex] !== code) {
        document.getElementById("error-login1").innerHTML = "Correo o código incorrecto.";
        return;
    }

    // Successful login (simulated, replace with server-side validation)
    //document.getElementById("error-login1").innerHTML = "Inicio de sesión correcto!";

    document.getElementById("error-login1").innerHTML = "Inicio de sesión correcto!";
    /* $("#inicio.html").click();
    $(document).ready(function () {
        $("#inicio.html").click();
    }); */
    document.getElementById("error-login1").innerHTML = "Accediendo!";

    // Programar el nuevo temporizador
    setTimeout(3000);
    window.open("/-Official/inicio.html");

    //window.location.href = "nosotros.html";
    // Redirect after a short delay for visual feedback
    /* setTimeout(() => {
        window.location.href = "nosotros.html";
    }, 1000); */ // Adjust delay as needed (in milliseconds)
    // Para cargar el contenido inicialmente


};




