$(document).ready(function() {
  var height = parseInt(prompt("Enter your age:"));

  if(height >= 36){
    $('#rideOne').show();
  } else if (height >= 48){
    $("#rideOne").show();
    $("#rideTwo").hide();
    $("#rideThree").hide();
  } else if (height >= 60){
    $("#rideOne #rideTwo #rideThree").show();
    $("#rideTwo").hide();
    $("#rideThree").hide();
  }
});
