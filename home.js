$(window).on('load', function () {
    setTimeout(function () {
        $(".loader-page").css({ visibility: "hidden", opacity: "0" })
    }, 2000);

});

$(function () {
    $('.selectpicker').selectpicker();
});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
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
    g.style.display = "inline";

    console.log("entro");

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
    g.style.display = "inline";
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
    g.style.display = "inline";
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
    g.style.display = "inline";
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
    g.style.display = "inline";
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
    g.style.display = "none";

}