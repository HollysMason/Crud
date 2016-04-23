define(['jquery', 'controllers/deleteUser' ], function (jquery, deleteUser) {




    $('.save').click(function (event) {
      var a = $(event.target).parent().parent().parent().parent();
      console.log(a);
    });



  function appendUser(user) {
    $("tbody.maindata").append(
      '<tr>' +
        '<td class="id">' + user.id + '</td>' +
        '<td class="name">' + user.name + '</td>' +
        '<td class="mail">' + user.email + '</td>' +
        '<td>' +
          '<button class="btn-edit"">Open Modal</button>'+
          '<button class="btn btn-default btn-delete">Delete</button>' +
        '</td>' +
      '</tr>'

    );

  var appendedUser = $("tbody.maindata tr").last(); //jQuery obj
  users.push(appendedUser); //Pushing jQuery obj of user element in table

  appendedUser.find("button.btn-edit").click(function (user) {
    $(event.target).parent().parent().append(
      '<div id="myModal-edit" class="modal-edit flag">'+
        '<div class="modal-content-edit flag">'+
          '<span class="close flag">close</span>'+
            '<label class="flag">Name</label>'+
              '<input type="text" class="name-edit flag" >'+
            '<label class="flag">email</label>'+
              '<input type="text" class="email-edit flag">'+
          '<button class="save flag">save</button>'+
        '</div>' +
      '</div>'
  );

    $('#myModal-edit').css('display','block');

    $('.close').click(function(){
        $('#myModal-edit').css('display','none');
    });

    $('.save').click(function () {
      user.name = $('.name-edit').val();
      user.email = $('.email-edit').val();
      $(event.target).parent().parent().parent().find('.name').html('<td class="name">' + user.name + '</td>');
      $(event.target).parent().parent().parent().find('.mail').html('<td class="name">' + user.email + '</td>');
      $('#myModal-edit').css('display','none');
      $('.flag').remove();
    });

  });
  // user.name = prompt('input new data' , user.name);
  // $(event.target).parent().parent().find('.name').html('<td class="name">' + user.name + '</td>');


  appendedUser.find("button.btn-delete").click(deleteUser);
  return appendedUser;
};

  return appendUser;
});
