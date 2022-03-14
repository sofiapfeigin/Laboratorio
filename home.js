$(window).on('load', function () {
    setTimeout(function () {
        $(".loader-page").css({ visibility: "hidden", opacity: "0" })
    }, 2000);

});

$(function() {
    $('.selectpicker').selectpicker();
  });

function nuevoTurno() {
    var f = document.getElementById("divPrinc");
    f.style.display = "none";
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
    var g = document.getElementById("image");
    e.style.display = "inline";


}
function misTurnos() {
    var f = document.getElementById("divPrinc");
    f.style.display = "none";
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
    var g = document.getElementById("image");
    e.style.display = "inline";
}
function misEstudios() {
    var f = document.getElementById("divPrinc");
    f.style.display = "none";
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
    var g = document.getElementById("image");
    e.style.display = "inline";
}
function misDatos() {
    var f = document.getElementById("divPrinc");
    f.style.display = "none";
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
    var g = document.getElementById("image");
    e.style.display = "inline";
}
function salir() {
    location.href = 'index.html';
}

function cargarResultados() {
    var f = document.getElementById("divPrinc");
    f.style.display = "none";
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
    var g = document.getElementById("image");
    e.style.display = "inline";
}
function consultas() {
    // var f = document.getElementById("divPrinc");
    // f.style.display = "none";
    // var a = document.getElementById("nuevoTurno");
    // a.style.display = "none";
    // var b = document.getElementById("misTurnos");
    // b.style.display = "none";
    // var c = document.getElementById("misEstudios");
    // c.style.display = "none";
    // var d = document.getElementById("misDatos");
    // d.style.display = "none";
    // var e = document.getElementById("cargarResultados");
    // e.style.display = "inline";
}
function volver() {
    var f = document.getElementById("divPrinc");
    f.style.display = "inline";
    var a = document.getElementById("nuevoTurno");
    a.style.display = "none";
    var b = document.getElementById("misTurnos");
    b.style.display = "none";
    var c = document.getElementById("misEstudios");
    c.style.display = "none";
    var d = document.getElementById("misDatos");
    d.style.display = "none";
    var e = document.getElementById("cargarResultados");
    e.style.display = "none";
    var g = document.getElementById("image");
    e.style.display = "none";

}