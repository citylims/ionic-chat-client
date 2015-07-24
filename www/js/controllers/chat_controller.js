app.controller('ChatCtrl', function($state, $stateParams, $scope, $ionicScrollDelegate, socket){

  $scope.$on('$ionicView.enter', function() {
    console.log("chat loaded");
    $scope.messages = [];
  });

  socket.on('connect', function() {
    var connected = true;
    socket.emit('add user', $stateParams.nickname);

  })


  $scope.goLogin = function() {
    $state.go('login');
  }

  $scope.sendMessage = function(message) {
    socket.emit('new message', message)
    addMessageToList($stateParams.nickname, message)
    socket.emit('stop typing');
    $scope.message = ""
  }

  function addMessageToList(username, message){
    $scope.messages.push({
      content: message,
      username: username,
    })
    $ionicScrollDelegate.scrollBottom();
  }

});
