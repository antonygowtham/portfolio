$(document).ready(function(){

    var userClickedPattern=[]
    var gamePattern=[]
    var buttonColours=["red", "blue", "green", "yellow"]

    var level=0;

    //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
    var started = false;

    // Detect keypress on the document
    $(document).keydown(function (event) {
        if (!started) {
            $("#result").text("");
            nextSequence();
            started = true;
          }
    });

    //Start button
    $(".start-button").click(function(){
        if (!started) {
            startOver();
            $("#result").text("");
            nextSequence();
            this.innerHTML="restart";
            
          }
    });


    //User iteraction ,Button Click Event
    $(".btn").click(function(){

        userChosenColour=$(this).attr("id");   // or this.id

        playSound(userChosenColour);

        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);

        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
    });

    //function to check answer
    function checkAnswer(currentLevel){

        if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            console.log("success");

            if(userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000)
            }
        }else{
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            if(level==0){
                gamePattern.push("nothing");
            }
            $("#result").text("expected ("+gamePattern+")  but you entered ("+userClickedPattern+")");
            startOver();
        }
    }

    //Restart the Game
    function startOver(){
        level=0;
        gamePattern=[];
        started=false;
    }

    //Function for generating NextSequence of the Game
    function nextSequence(){

        //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
        userClickedPattern = [];

        level++;
        $("#level-title").text("level  "+level);
        randomNumber=Math.floor(Math.random() * 4);
        randomChosenColour=buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        playSound(randomChosenColour)
        var btn_id="#"+randomChosenColour;
        $(btn_id).fadeIn(100).fadeOut(100).fadeIn(100);       
    }

    //Function to Playsound 
    function playSound(ColorName){
        var audio = new Audio("sounds/" + ColorName + ".mp3");
        audio.play();
    }

    //Function to animate a Button
    function animatePress(currentColour){
        var delayInMilliseconds=100;
        $("."+currentColour).addClass("pressed");
        setTimeout(function(){
            $("."+currentColour).removeClass("pressed");
        }, delayInMilliseconds);
    }


    
    
});
