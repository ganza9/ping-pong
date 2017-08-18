function pingPong(num){
  var result = [];
  for (i=1; i<=num; i++) {
    if((i % 15) === 0) {
      result.push('pingpong');
    } else if((i % 5) === 0){
      result.push('pong');
    } else if((i % 3) === 0) {
      result.push('ping');
    } else {
    result.push(i);
    }
  }
  return result;
};


$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#number").val());
    var input = pingPong(num);
     result = input.join(" ");
    $("#result").append("<li #list-item>" + result +"</li>");
  });
});
