$(document).ready(function(){
    var targetNumber = Math.floor(Math.random()*120)+19;
    var counter = 0;
    var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
    var loses = 0;
    var wins = 0;
    var gamelock = false;
    var crystal1 = $(".crystal-1");
    var crystal2= $(".crystal-2");
    var crystal3 = $(".crystal-3");
    var crystal4 = $(".crystal-4");
    
    var crystalValue = [];

    function newGame(){
    
    crystalValue[0] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalValue[1] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalValue[2] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalValue[3] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];

    crystal1.attr("data-crystalValue", crystalValue[0]);
    crystal2.attr("data-crystalValue", crystalValue[1]);
    crystal3.attr("data-crystalValue", crystalValue[2]);
    crystal4.attr("data-crystalValue", crystalValue[3]);
    console.log(crystal1);
    }

    newGame();
  
    $("#number-to-guess").text(targetNumber);

    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/song/tetris.mp3");
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });
    //for (var i = 0; i < 4; i++) {

        // For each iteration, we will create an imageCrystal
        //var imageCrystal = $("<img>");
    
        //adds class crystal-image
        //imageCrystal.addClass("crystal-image");
    
        // Each imageCrystal will be given a src link to the crystal image
        //imageCrystal.attr("src", "assets/images/images.jpeg")
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        
        //imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
       // $("#crystals").append(imageCrystal);
      //}
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
      newGame();
      reset();


    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      loses++
    newGame();
    reset();
        

    }
    function reset(){
      targetNumber = Math.floor(Math.random()*120)+19;
      $("#number-to-guess").text(targetNumber);
      counter = 0;
      //numberOptions = [Math.floor(Math.random()*20),Math.floor(Math.random()*20),Math.floor(Math.random()*20),Math.floor(Math.random()*20)];
    }
  }

    $("#wins").text(wins);
    $("#loses").text(loses);
    
    
      });









    
})