
let misUsuarios = [];

let usuarios = document.getElementById('result');

class Usuario {
    constructor(fecha, nombres, correo, pass, genero) {
        this.fecha = fecha,
            this.nombres = nombres,
            this.correo = correo,
            this.pass = pass,
            this.genero = genero
    }
}


function guardar(fecha, nombres, correo, pass, genero) {

    const fechaU = document.getElementById(fecha).value;
    const nombresU = document.getElementById(nombres).value;
    const correoU = document.getElementById(correo).value;
    const passU = document.getElementById(pass).value;
    const generoU = document.getElementById(genero).value;



    let usuarioC = new Usuario(fechaU, nombresU, correoU, passU, generoU);

    misUsuarios.push(usuarioC);
    mostrar()
    limpiarFormulario()

}


function mostrar() {

    usuarios.innerHTML = '';

    for (let i = 0; i < misUsuarios.length; i++) {


        let user = misUsuarios[i];

        usuarios.innerHTML = usuarios.innerHTML +

            '<td>' + user.fecha + '</td>' +
            '<td>' + user.nombres + '</td>' +
            '<td>' + user.correo + '</td>' +
            '<td>' + user.genero + '</td>';
    }

}

function limpiarFormulario() {

    document.getElementById('miform').reset();
}