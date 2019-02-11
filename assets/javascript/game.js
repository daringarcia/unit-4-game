//Selects random number between 19 and 120
$(document).ready(function(){
    var Random = Math.floor(Math.random()*101+19)
    $("#RandomNumber").text(Random);
    //Random number for each crystal between 1 and 12
    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)

    var PlayerTotal = 0;
    var Wins = 0;
    var Losses = 0;
//Tallies of wins and losses
$("#NumberOfWins").text(Wins);
$("#NumberOfLosses").text(Losses);

//Clicks for the crystals
$("#emerald").on ("click",function(){
    PlayerTotal=PlayerTotal + num1;
    console.log("new PlayerTotal=" + PlayerTotal);
    $("#TotalScore").text(PlayerTotal);
    
    //conditions for winning and losing
    if (PlayerTotal == Random){
        winner();
    }
    else if (PlayerTotal > Random){
        loser();
    }
})
$("#diamond").on ("click",function(){
    PlayerTotal=PlayerTotal + num2;
    console.log("new PlayerTotal=" + PlayerTotal);
    $("#TotalScore").text(PlayerTotal);
    
    //conditions for winning and losing
    if (PlayerTotal == Random){
        winner();
    }
    else if (PlayerTotal > Random){
        loser();
    }
})
$("#ruby").on ("click",function(){
    PlayerTotal=PlayerTotal + num3;
    console.log("new PlayerTotal=" + PlayerTotal);
    $("#TotalScore").text(PlayerTotal);
    
    //conditions for winning and losing
    if (PlayerTotal == Random){
        winner();
    }
    else if (PlayerTotal > Random){
        loser();
    }
})
$("#sapphire").on ("click",function(){
    PlayerTotal=PlayerTotal + num4;
    console.log("new PlayerTotal=" + PlayerTotal);
    $("#TotalScore").text(PlayerTotal);
    
    //conditions for winning and losing
    if (PlayerTotal == Random){
        winner();
    }
    else if (PlayerTotal > Random){
        loser();
    }
})

//reset the game
function reset(){
    Random = Math.floor(Math.random()*101+19);
    console.log(Random)
    $("#RandomNumber").text(Random);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    PlayerTotal = 0;
    $("#TotalScore").text(PlayerTotal);
}
//increases player's total wins
function winner(){
    alert("You win!");
    Wins++;
    $("#NumberOfWins").text(Wins);
    reset();
}
//increases player's total losses
function loser(){
    alert("You lose!");
    Losses++;
    $("#NumberOfLosses").text(Losses);
    reset();
}
})
