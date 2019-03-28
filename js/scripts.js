$(document).ready(function() {
  var height = parseInt(prompt("Enter your height (in inches):"));

  if(height <= 35){
    $('div').removeClass("starlight");
    $("#rideOne").addClass("starlight");

  } else if (height <= 48){
    $('div').removeClass("starlight");
    $("#rideOne").addClass('starlight');
    $("#rideTwo").addClass('starlight');

  } else if (height >= 49){
    $('div').removeClass("starlight");
    $("#rideTwo").addClass('starlight');
    $("#rideThree").addClass('starlight');
    
  } else {
    alert("Enter a valid height");
    parseInt(prompt("Enter your height (in inches)"));
  }

});
