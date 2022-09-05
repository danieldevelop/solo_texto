function soloTexto(e) {
    const tecla = document.all ? e.keyCode : e.which;
    const patron = /[A-Za-z\s]/;
    const character = String.fromCharCode(tecla);

    // if (patron.test(character)) {
    //     return true;
    // } else {
    //     alert("Solo se permiten texto");
    //     return false;
    // }

    return patron.test(character);
}

function textoAlphanumeric(e) {
    const tecla = document.all ? e.keyCode : e.which;
    const patron = /[A-Za-z0-9,\s]/;
    const character = String.fromCharCode(tecla);

    return patron.test(character);
}

function soloNumero(e) {
    const tecla = document.all ? e.keyCode : e.which;
    const patron = /[0-9\s]/;
    const character = String.fromCharCode(tecla);

    return patron.test(character);
}