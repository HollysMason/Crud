define(['jquery'] , function (jquery) {
  function deleteUser() {
    if (confirm("Are you sure ?") == true) {
    //context lost probably
    $(event.target).parent().parent().remove();
  }
  }
  return deleteUser;
});
