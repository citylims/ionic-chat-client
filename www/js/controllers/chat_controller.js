app.controller('ChatCtrl', function($state, $stateParams, $scope, $ionicScrollDelegate, socket){

  $scope.$on('$ionicView.enter', function() {
    console.log("chat loaded");
    $scope.messages = [];
  });

  socket.on('connect', function() {
    var connected = true;
    socket.emit('add user', $stateParams.nickname);
  })

  socket.on('user joined', function (data) {
  	addMessageToList(data.username, " has joined the chat");
  });

  socket.on('user left', function (data) {
    addMessageToList(data.username, " has left the chat");
  })

  socket.on('new message', function(data) {
    if (data.username && data.message) {
      addMessageToList(data.username, data.message);
    }
  })


  $scope.goLogin = function() {
    $state.go('login');
  }

  $scope.sendMessage = function(message) {
    if (message === undefined) {
      alert("Empty Message");
    } else {
      socket.emit('new message', message)
      addMessageToList($stateParams.nickname, message)
      socket.emit('stop typing');
      $scope.message = ""
    }
  }

  function addMessageToList(username, message){
    $scope.messages.push({
      content: message,
      username: username,
    })
    $ionicScrollDelegate.scrollBottom();
  }

});
