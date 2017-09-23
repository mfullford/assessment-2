$(document).ready(function(e) {

// Get some sort of clicking animation to move the first moto

// Shout out to Mike for walking me through this during lunch! 


var bikeOne = $('#motorcycleOne');  //pulling in the first moto ID
var bikeTwo = $('#motorcycleTwo');	//pulling in the second moto ID
var oneMove = 0;				//We need some sort of start value
var twoMove = 0;		

$('body').keyup(function (e) {
	if (e.keyCode == 90) {      //If I press the z key
		oneMove += 10;          //move var oneMove up by 10 - th higher the number the faster the game
		$('#motorcycleOne').css("padding-left", oneMove + "%");    //add that sweet lightning bar I wanted by pushing the padding out each time it moves
	}
	if(oneMove === 320) {       // It wins at the length of my desktop, sorry I didn't make a mobile version
		alert("Winner: Player 1!");
		location.reload();      // reload the game to reset at the beginning
}
});

$('body').keyup(function (e) {
	if (e.keyCode == 32) {
		twoMove += 10;
		$('#motorcycleTwo').css("padding-left", twoMove + "%");
	if(twoMove === 320) {
		alert("Winner: Player 2!");
		location.reload();
	}
}
});

// My flicker function for my neon sign 
function flicker(count, callback, current) {  
    current = current || 0;

    $("#begin")[current % 2 == 0 ? 'hide' : 'show']();

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
        $("#begin").fadeIn("fast");   //played with fading in slower, don't want it to take too long
    })
}, 1000)




});



// Your game must have a clear win condition  CHECK
// Add animations (really want to do stripes behind the moto objects) Didn't need animations to do this!