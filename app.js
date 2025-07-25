// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSecretos = [];

function agregarAmigo() {
    if (inputVacio()) {
        return;
    } else {
        if (listaAmigosSecretos.length === 0) {
            reiniciarResultado();
        }
        let nuevoAmigo = document.getElementById("txtAmigo").value.trim();
        if (validarExistencia(nuevoAmigo)) {
            alert("El amigo secreto ya existe");
        } else {
            listaAmigosSecretos.push(nuevoAmigo);
            document.querySelector("#txtAmigo").value = "";
            let htmlNuevoAmigo = `<li>${nuevoAmigo}</li>`;
            document.querySelector("#listaAmigos").innerHTML += htmlNuevoAmigo;
            document.querySelector("#txtAmigo").focus();
        }
    }
}

function validarExistencia(nuevoAmigo) {
    return listaAmigosSecretos.some(amigo => amigo === nuevoAmigo);
}

function inputVacio() {
    let estaVacio = false;
    let input = document.querySelector("#txtAmigo");
    if (input.value.trim() === "") {
        alert("Porfavor, ingrese un nombre valido");
        input.value = "";
        input.focus();
        reiniciarResultado();
        estaVacio = true;
        return estaVacio;
    }
    return estaVacio;
}

function sortearAmigo() {
    if (listaAmigosSecretos.length < 2) {
        reiniciarResultado();
        alert("Ingresar por lo menos 2 amigos secretos para jugar");
    } else {
        let amigoSeleccionado = listaAmigosSecretos[Math.floor(Math.random() * listaAmigosSecretos.length)];
        let mensaje = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
        document.querySelector("#resultado").innerHTML = mensaje;
        reinicioJuego();
    }

}

function reinicioJuego() {
    listaAmigosSecretos = [];
    document.querySelector("#listaAmigos").innerHTML = "";
}

function reiniciarResultado() {
    document.querySelector("#resultado").innerHTML = "";
}