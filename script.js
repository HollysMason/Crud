$(document).ready(function () {
  $("button.add-user").click(function () {
    $("input[name='username']").val('').focus();
    $("input[name='email']").val('').focus();
    });
    $("button.submit").click(function () {
      var users = [];
      var User = function (name, email) {
        this.name = name;
        this.email = email;
      }
      users.push(new User(
        $("input[name='username']").val(),
        $("input[name='email']").val()
      ));
      users.forEach(function(user){
      $("tbody").append(
        '<tr>' +
          '<td class="name">' + user.name + '</td>' +
          '<td class="mail">' + user.email + '</td>' +
          '<td>' +
            '<button type="button"  class="btn btn-default">Edit</button>' +
            '<button type="button" id="buttonDelete" class="btn btn-default">Delete</button>' +
          '</td>' +
        '</tr>'
      );
    });
  });
});
