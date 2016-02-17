$(document).ready(function(){

createUser();
addHead();

// console.log($('#buttonDelete'));
});

var User = function(  name , mail ){

  this.name = name;
  this.mail = mail;
}
var id = 0;

var createUser = function(){
var arrOfUsers = [];
  $("div.modal-footer > button.add").click(function(){


    //console.log(userTemp);
    if($("#exampleInputName2").val() != "" && $("#exampleInputEmail2").val() != ""){
      var userTemp = new User($("#exampleInputName2").val() , $("#exampleInputEmail2").val());
      arrOfUsers.push(userTemp);


      $("tbody").append(
        '<tr>'+
         '<td class="id">'+(id++)+'</td>'+
         '<td class="name">'+userTemp.name+'</td>'+
         '<td class="mail">'+userTemp.mail+'</td>'+
          '<td><button type="button"  class="btn btn-default">Edit</button>'+
          '<button type="button" id="buttonDelete" class="btn btn-default">Delete</button></td>'+
          '</tr>'
        );
    }else{

    }
    $("#exampleInputName2").val('').focus();
    $("#exampleInputEmail2").val('').focus();

    $("#buttonDelete").click(function(){alert("button delete was clicked");});



                                    });



}

var addHead = function(){
  $("table").append('<thead>'+
    '<tr>'+
        '<th >ID</th>'+
        '<th >NAME</th>'+
        '<th colspan="2">Mail</th>'+
      '</tr>'+
  '</thead>'+
        '<tbody>'+

      '</tbody>');
    }
// var createUser = function(){
//
//   $("div.modal-footer > button.add").click(function(){
//
//     var userTemp = new User($("#exampleInputName2").val() , $("#exampleInputEmail2").val());
//     console.log(userTemp);
//     if(userTemp.name != "" && userTemp.mail != ""){
//       $("tbody").append(
//         '<tr>'+
//          '<td class="id">'+(id++)+'</td>'+
//          '<td class="name">'+userTemp.name+'</td>'+
//          '<td class="mail">'+userTemp.mail+'</td>'+
//           '<td><button type="button"  class="btn btn-default">Edit</button>'+
//           '<button type="button" id="buttonDelete" class="btn btn-default">Delete</button></td>'+
//           '</tr>'
//         );
//     }else{
//
//     }
//     $("#exampleInputName2").val('').focus();
//     $("#exampleInputEmail2").val('').focus();
//
//                                     });
//
// }

// var id = 1;
//
//   var addRow  = function(){
//   $("div.modal-footer > button.add").click(function(){
//         $("tbody").append(
//           '<tr>'+
//            '<td class="id">'+(id++)+'</td>'+
//            '<td class="name">'+$("#exampleInputName2").val()+'</td>'+
//            '<td class="mail">'+$("#exampleInputEmail2").val()+'</td>'+
//             '<td><button type="button"  class="btn btn-default">Edit</button>'+
//             '<button type="button" id="buttonDelete" class="btn btn-default">Delete</button></td>'+
//             '</tr>'
//           );
// $("#exampleInputName2").val('').focus();
// $("#exampleInputEmail2").val('').focus();
//       });
//
//   }
