$(document).ready(function() {
  var flavors = ["cookies and cream", "rocky road", "vanilla", "strawberry"];
  flavors.forEach(function(flavor) {
    $('ul#icecream').append('<li>'+flavor+'</li>');
  });



  var flavors = ["cookies and cream", "rocky road", "vanilla", "strawberry"];
flavors.length;

  for (var i = 0; i < flavors.length; i += 1){
    $('ul#icecream').append('<li>'+flavors[i]+'</li>');
  }


});
