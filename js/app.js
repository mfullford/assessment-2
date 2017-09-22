$(document).ready(function(e) {

// Get some sort of clicking animation to move the first moto

$(document).click(function() {
  $( ".moto" ).animate({
    left: "+=50",
  }, 300, function() {
    // Animation complete.
  });
});


function flicker(count, callback, current) {
    current = current || 0;

    $("#logo")[current % 2 == 0 ? 'hide' : 'show']();

    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker(count, callback, current + 1)
    }, 100);
}

setTimeout(function () {
    flicker(3, function () {
        $("#logo").fadeIn("slow");
    })
}, 1000)

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



// Your game must have a clear win condition
// Add animations (really want to do stripes behind the moto objects)