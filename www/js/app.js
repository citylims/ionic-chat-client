var app= angular.module('ionic-chat-client', ['ionic', 'ngSanitize','btford.socket-io'])

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('chat', {
      url: "/chat/:nickname",
      templateUrl: "templates/chat.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    });
    $urlRouterProvider.otherwise('/login');
  })
