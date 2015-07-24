angular.module('ionic-chat-client', ['ionic', 'btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider)
   {
     $stateProvider

     .state('chat', {
       url: "/chat/:nickname",
       templateUrl: "templates/chat.html",
       controller: 'ChatCtrl'
     })

     .state('login', {
       url: "/login",
       templateUrl: "templates/login.html",
       controller: 'LoginCtrl'
     });
     
     $urlRouterProvider.otherwise('/login');
   })
