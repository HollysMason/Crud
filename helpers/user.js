define(['jquery' , 'controllers/user'] , function (jquery, createUser) {
  var addUser = function () {
    $("input[name='username']").val('').focus();
    $("input[name='email']").val('').focus();

  };
  return addUser;
});
