function pingPong(num){
  var result = [];
  for (var i=1; i<=num; i++){
    if(num % 3 === 0) {
      result.push('ping');
    }
    else if(num % 5 == 0){
      result.push('pong');
    }
    else if(num % 15 === 0) {
      result.push('pingpong');
    }
    else if(num ) {
    result.push(i);
    }
  }
  return result;
};


$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#stringIn").val());
    var result = pingPong(num);
    $("#num").show(num);

  )}

    $("#result").show();

  });
