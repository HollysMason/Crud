var appendUser = function (user) {
  $("tbody.maindata").append(
    '<tr>' +
      '<td class="id">' + user.id + '</td>' +
      '<td class="name">' + user.name + '</td>' +
      '<td class="mail">' + user.email + '</td>' +
      '<td>' +
        '<button class="btn btn-default btn-edit">Edit</button>' +
        '<button class="btn btn-default btn-delete">Delete</button>' +
      '</td>' +
    '</tr>'
  );

  var appendedUser = $("tbody.maindata tr").last(); //jQuery obj

  users.push(appendedUser); //Pushing jQuery obj of user element in table

  appendedUser.find("button.btn-edit").click(editUser);
  appendedUser.find("button.btn-delete").click(deleteUser);

  return appendedUser;
};

var addUser = function () {
  //reset inputs
  $("input[name='username']").val('').focus();
  $("input[name='email']").val('').focus();
  //add submit handler
  //context lost probably
  $("button.submit").click(createUser);
}
