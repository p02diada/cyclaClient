angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {


  $scope.registrarUsuario=function(user){

    var u = {
        "username": user.username,
        "password": user.password,

    }

        $http.post('http://127.0.0.1:8000/usuarios/registrarCiclista/', u)   
    .success(function(data) {
      console.log("HA ENVIADO EL POST");
      window.location = "#/app/login";
    })
    .error(function(err){
      // An alert dialog

      console.log(err);
    })  


  }

})

.controller('InicioCtrl', function($scope, $http) {


  $scope.registrarUsuario=function(user){

    var u = {
        "username": user.username,
        "password": user.password,

    }

        $http.post('http://127.0.0.1:8000/usuarios/registrarCiclista/', u)   
    .success(function(data) {
      console.log("HA ENVIADO EL POST");
      window.location = "#/app/login";
    })
    .error(function(err){
      // An alert dialog

      console.log(err);
    })  


  }

  $scope.loguear=function(user){

    var u = {
        "username": user.username,
        "password": user.password,

    }

    $http.post('http://127.0.0.1:8000/api-token-auth/', 'username=' + user.username + '&password=' + user.password, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }

    })
    .success(function(data){
      console.log("HA ENTRADO");
    })
    .error(function(err){
      console.log(err);
    })

  }

})

.controller('seleccionUsuarioCtrl', function($scope, $http) {



})

.controller('RegistrarRemitenteCtrl', function($scope, $http) {


  $scope.registrarUsuario=function(user){

    var u = {
        "username": user.username,
        "password": user.password,

    }

        $http.post('http://127.0.0.1:8000/usuarios/registrarRemitente/', u)   
    .success(function(data) {
      console.log("HA ENVIADO EL POST");
      window.location = "#/app/login";
    })
    .error(function(err){
      // An alert dialog

      console.log(err);
    })  


  }

})

.controller('RegistrarCiclistaCtrl', function($scope, $http) {


  $scope.registrarUsuario=function(user){

    var u = {
        "username": user.username,
        "password": user.password,

    }

        $http.post('http://127.0.0.1:8000/usuarios/registrarCiclista/', u)   
    .success(function(data) {
      console.log("HA ENVIADO EL POST");
      window.location = "#/app/login";
    })
    .error(function(err){
      // An alert dialog

      console.log(err);
    })  


  }

})


