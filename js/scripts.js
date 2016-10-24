$(document).ready(function() {
  var flavors = ["cookies and cream", "rocky road", "vanilla", "strawberry"];
  flavors.forEach(function(flavor) {
    $('ul#icecream').append('<li>'+flavor+'</li>');
  });
});
