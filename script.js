$(document).ready(function () {
  $("button.add-user").click(function () {
    $("input[name='username']").val('').focus();
    $("input[name='email']").val('').focus();
  });
  $("button.submit").click(function () {
    var User = function (name, email) {
      this.name = name;
      this.email = email;
    }
    var user = new User(
      $("input[name='username']").val(),
      $("input[name='email']").val()
    );
    $("tbody.maindata").append(
      '<tr>' +
        '<td class="name">' + user.name + '</td>' +
        '<td class="mail">' + user.email + '</td>' +
        '<td>' +
          '<button type="button" class="btn btn-default" onclick="editUser()">Edit</button>' +
          '<button type="button"  class="btn btn-default" onclick="deleteUser()">Delete</button>' +
        '</td>' +
      '</tr>'
    );
  });
});

var editUser = function () {
  var EditUser = function (editName, editEmail) {
    this.editName = editName;
    this.editEmail = editEmail;
  }

  var editUser = new EditUser(changedName, changedEmail);
  var cur = $(event.target).parent().parent().replaceWith(
      '<tr>' +
        '<td class="name">' + editUser.editName + '</td>' +
        '<td class="name">' + editUser.editEmail + '</td>' +
      '<td>' +
        '<button type="button" class="btn btn-default" onclick="edit()">Edit</button>' +
        '<button type="button"  class="btn btn-default" onclick="deleteUser()">Delete</button>' +
      '</td>' +
    '</tr>'
  );
}

var deleteUser = function () {
  var confirmWindow = confirm("Are you sure ?");
  if (confirmWindow == true) {
      var current = $(event.target).parent().parent().remove();
  }
}
