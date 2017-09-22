$(document).ready(function(e) {

// Get some sort of clicking animation to move the first moto

$(document).click(function() {
  $( ".moto" ).animate({
    left: "+=50",
  }, 300, function() {
    // Animation complete.
  });
});

// Get some sort of animation when pressing space for the second moto

// document.body.onkeyup = function(e){
//     if(e.keyCode == 32){
//       $( "#motorcycleTwo" ).animate({
//     	left: "+=50",
//   		}, 400, function() {
//     // Animation complete.
//        });  
//     }
// }

// $(window).keypress(function(e) {
//     if (e.which === 32) {
//   $( "#motorcycleTwo" ).animate({
//     left: "+=50",
//   }, 400, function() {
//     // Animation complete.
//   });
// }});

// once either crosses a certain length point, that person is declared the winner

// ask if they would like to start again

});