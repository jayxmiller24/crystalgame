$(document).ready(function(){
    var targetNumber = Math.floor(Math.random()*80);
    var counter = 0;
    var numberOptions = [10, 5, 3, 7];
    var loses = 0;
    var wins = 0;
    var gamelock = false;
  var increment = numberOptions[Math.round(Math.random())];
    $("#number-to-guess").text(targetNumber);

    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/song/tetris.mp3");
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });
    for (var i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
    
        //adds class crystal-image
        imageCrystal.addClass("crystal-image");
    
        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "assets/images/images.jpeg")
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
      }
    $(".crystal-image").on("click", function() {
        if (gamelock  !== true){
        // Clicking the button triggers an alert message.
        var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
        
    if (counter === targetNumber) {
      alert("You win!");
      wins++
      targetNumber = Math.floor(Math.random()*80);
      $("#number-to-guess").text(targetNumber);
      counter = 0;


    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      loses++
      targetNumber = Math.floor(Math.random()*80);
      $("#number-to-guess").text(targetNumber);
      counter = 0;
        

    }
  }

    $("#wins").text(wins);
    $("#loses").text(loses);
    
    
      });









    
})