$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    })
});

$(window).on('load', function () {
    setTimeout(function () {
        $(".loader-page").css({ visibility: "hidden", opacity: "0" })
    }, 2000);

});

let moduloLogin = angular.module('iw3', ['ngStorage', 'oitozero.ngSweetAlert'])


    .constant('URL_API_BASE', 'http://localhost:8080/api/final/')
    .constant('URL_BASE', 'http://localhost:8080/')
    .constant('URL_WS', '/api/final/ws')

moduloLogin.controller('loginController', function ($scope, $localStorage, $http) {

    //Si se llegó al login, me aseguro que se borren los datos del localstorage ya que no hay nadie logueado
    delete $localStorage.userdata;
    localStorage.setItem("logged", "false");

    //Valido cuando se presiona el botón para iniciar sesión
    $scope.validar = function () {
        if ($scope.dni.length >= 7 && $scope.password.length >= 8) {
            let user = { dni: $scope.dni, password: $scope.password };

            // let req = {
            //     method: 'POST',
            //     url: 'http://localhost:8080/login-user?username=' + user.name + '&password=' + user.password,
            //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            // };

            let login = function () {

                if (user.dni == "41963445" && user.password == "Sofiafeigin22") {
                    $localStorage.userdata = resp.data;
                    localStorage.setItem("logged", "true");
                    window.location.replace("home.html");
                }
                else {
                    var result=document.getElementById("result");
                    result.style.display="inline";
                    alert("Los datos ingresados son incorrectos.");
                }
                // $http(req).then(
                //     function (resp) {
                //         if (resp.status === 200) {
                //             console.log(resp.data);
                //             $localStorage.userdata = resp.data;
                //             localStorage.setItem("logged", "true");
                //             localStorage.setItem("token", resp.data.authtoken);
                //             window.location.replace("http://localhost:8080");
                //         } else {
                //             console.log("No se pudo loguear.");
                //             alert("Los datos ingresados son incorrectos.");
                //         }
                //     },
                //     function (respErr) {
                //         console.log("No se pudo loguear.");
                //         alert("Los datos ingresados son incorrectos.");
                //     }
                // );
            };

            login();

        }
    };

});
