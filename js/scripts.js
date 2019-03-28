$(document).ready(function() {
  var height = parseInt(prompt("Enter your age:"));

  if(height <= 35){
    $('#rideOne').show();
  } else if (height <= 48){
    $("#rideOne").show();
    $("#rideTwo").show();
    $("#rideThree").hide();
  } else if (height >= 49){
    $("#rideOne").show();
    $("#rideTwo").show();
    $("#rideThree").show();
    
  }
});
