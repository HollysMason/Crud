var createUser = function () {
  //context lost
  var appended = appendUser(new User(
    $("input[name='username']").val(),
    $("input[name='email']").val()
  ));
};

var editUser = function () {
  //TODO: open Modal Window. Add submit handler or use the old one. But you don't need
  //to append an element anymore. Just replace it.
}

var deleteUser = function () {
  if (confirm("Are you sure ?") == true) {
    //context lost probably
    $(event.target).parent().parent().remove();
  }
}
