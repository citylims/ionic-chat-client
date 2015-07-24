app.controller('LoginCtrl', function($state, $scope, $sanitize) {

  $scope.join = function(name) {
    var user = $sanitize(name);
    if (user) {
      $state.go('chat',{nickname: user})
    }
  }

});
