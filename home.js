$(window).on('load', function () {
    setTimeout(function () {
        $(".loader-page").css({ visibility: "hidden", opacity: "0" })
    }, 2000);

});
$(document).ready(function () {

    var height = $(window).height();

    $('#divPrinc').height(height);
});

function nuevoTurno() {
    var a = document.getElementById("nuevoTurno");
    a.style.display = "inline";
    var b = document.getElementById("misTurnos");
    b.style.display = "none";
    var c = document.getElementById("misEstudios");
    c.style.display = "none";
    var d = document.getElementById("misDatos");
    d.style.display = "none";
    var e = document.getElementById("cargarResultados");
    e.style.display = "none";


}
function misTurnos() {
    var a = document.getElementById("nuevoTurno");
    a.style.display = "none";
    var b = document.getElementById("misTurnos");
    b.style.display = "inline";
    var c = document.getElementById("misEstudios");
    c.style.display = "none";
    var d = document.getElementById("misDatos");
    d.style.display = "none";
    var e = document.getElementById("cargarResultados");
    e.style.display = "none";
}
function misEstudios() {
    var a = document.getElementById("nuevoTurno");
    a.style.display = "none";
    var b = document.getElementById("misTurnos");
    b.style.display = "none";
    var c = document.getElementById("misEstudios");
    c.style.display = "inline";
    var d = document.getElementById("misDatos");
    d.style.display = "none";
    var e = document.getElementById("cargarResultados");
    e.style.display = "none";
}
function misDatos() {
    var a = document.getElementById("nuevoTurno");
    a.style.display = "none";
    var b = document.getElementById("misTurnos");
    b.style.display = "none";
    var c = document.getElementById("misEstudios");
    c.style.display = "none";
    var d = document.getElementById("misDatos");
    d.style.display = "inline";
    var e = document.getElementById("cargarResultados");
    e.style.display = "none";
}
function salir() {
    location.href = 'index.html';
}

function misDatos() {
    var a = document.getElementById("nuevoTurno");
    a.style.display = "none";
    var b = document.getElementById("misTurnos");
    b.style.display = "none";
    var c = document.getElementById("misEstudios");
    c.style.display = "none";
    var d = document.getElementById("misDatos");
    d.style.display = "none";
    var e = document.getElementById("cargarResultados");
    e.style.display = "inline";
}