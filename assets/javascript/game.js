$(document).ready(function(){
    // selects a random number between 19-120
    var random = Math.floor(Math.random()*101+19)
    // appending random number to randomNumber ID in html doc
    $("#randomNumber").text(random);


  // setting random numbers for each jewel
  //random number has to be between 1-12
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  // setting counters
  var userTotal = 0;
  var wins = 0;
  var losses = 0;


  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  // resetting the game
  function reset() {
    random=Math.floor(Math.random()*101+19);
    console.log(random)
    $('#randomNumber').text(random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 
  
  function winner() {
  alert("You won!");
    wins++;
    console.log("whatever");
    $("#numberWins").text(wins);
    reset();
  } 
  
  function loss() {
  alert("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }

  $("#diamond").on("click", function() {
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $("#finalTotal").text(userTotal);
      if (userTotal === random) {
          winner();
      }

      else if (userTotal > random) {
          loss();
      }

  })

  $("#ruby").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal === random) {
        winner();
    }

    else if (userTotal > random) {
        loss();
    }

})  

$("#topaz").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal === random) {
        winner();
    }

    else if (userTotal > random) {
        loss();
    }

})

$("#emerald").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal === random) {
        winner();
    }

    else if (userTotal > random) {
        loss();
    }

});
});