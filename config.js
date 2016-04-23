var users = [];

require(['jquery','helpers/user', 'controllers/user'] ,
function(jquery, addUser, createUser){
  $(document).ready(function () {
    $('button.add-user').click(addUser);
    $('button.submit').click(createUser);    
    });
});
