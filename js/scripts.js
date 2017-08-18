function pingPong(num){
  var result = [];
  for (var i=1; i<=num; i++) {
    if((num % 15) === 0) {
      result.push('pingpong');
    }
    else if((num % 5) == 0){
      result.push('pong');
    }
    else if((num % 3) === 0) {
      result.push('ping');
    }
    else {
    result.push('i');
    }
  }
  return result;
};


$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    $("li#list-item").remove();
    var num = parseInt($("input#number").val());
    var input = pingPong(num);
     result = input.join(" ");

    $("#result").append("<li #list-item>" + result +"</li>");
  });
});
