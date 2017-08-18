var pingNum = function pingPong(num){

  if(num % 3 === 0) {
    return ('ping');

  if(num % 5 == 0)
    return ('pong');

  if(num % 15 === 0)
    return ('pingpong');

    }
  };


$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#stringIn").val());
    var result = pingPong(num);
    $("#num").text(num);

    if(!result){
      $("#not").text("not");
    } else {
      $("#not").text("");
    }
    $("#stringOut").show();

  });
});
