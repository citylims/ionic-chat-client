app.controller('LoginCtrl', function($state, $sanitize) {
  var self = this;

  self.join = function() {
    var nickname = $sanitize(self.nickname);
    if (nickname) {
      $state.go('chat',{nickname:nickname})
    }
  }

});
