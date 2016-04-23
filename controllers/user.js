define(['jquery', 'models/user', 'helpers/userappend'] , function (jquery, User, appendUser) {
  var createUser = function () {
    appendUser(new User(
      $("input[name='username']").val(),
      $("input[name='email']").val()
    ));
  }
  return createUser;
});
