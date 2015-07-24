app.controller('ChatCtrl', function($state, $scope, socket){

  $scope.$on('$ionicView.enter', function() {
    console.log("chat loaded");
  });

  socket.on('connect', function() {
    sokcet.emti('add user', `nickname`);
  })

  $scope.goLogin = function() {
    $state.go('login');
  }

});
