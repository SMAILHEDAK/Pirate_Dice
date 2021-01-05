

// Player name 
var player1 = "Player 1"; 
var player2 = "Player 2"; 
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// Function to change the player name

function editNames() { 
    player1 = prompt("Change Player1 name"); 
    player2 = prompt("Change Player2 name"); 
    reg1 = player1.match(/^[a-z 0-9]+$/i);
    reg2 = player2.match(/^[a-z 0-9]+$/i);
    if(player1 == reg1 && player2 == reg2 && player1 != player2){
      document.querySelector("p.Player1").innerHTML = player1;
      document.querySelector("p.Player2").innerHTML = player2;
      document.querySelector("th.firstPlayer").innerHTML = player1;
      document.querySelector("th.secondPlayer").innerHTML = player2;  
    }
    else
    {
      alert("Please enter a name that doesn't contain a symbol and/or not similar names.");
    }
}


// Function to roll the dice 
function rollTheDice() { 
    setTimeout(function () { 
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
        document.querySelector(".img1").setAttribute("src", 
            "dice" + randomNumber1 + ".png"); 

        document.querySelector(".img2").setAttribute("src", 
            "dice" + randomNumber2 + ".png"); 

        if (randomNumber1 === randomNumber2) { 
            document.querySelector("h1").innerHTML = "Draw!";
            scorePlayer1++;
            scorePlayer2++;
            document.querySelector("td.player1Score").innerHTML =(scorePlayer1);
            document.querySelector("td.player2Score").innerHTML =(scorePlayer2);
            
        } 

        else if (randomNumber1 < randomNumber2) { 
            document.querySelector("h1").innerHTML 
                            = (player2 + " WINS!");
            scorePlayer2++;
            document.querySelector("td.player1Score").innerHTML =(scorePlayer1);
            document.querySelector("td.player2Score").innerHTML =(scorePlayer2);
        } 

        else { 
            document.querySelector("h1").innerHTML 
                            = (player1 + " WINS!"); 
            scorePlayer1++;
            document.querySelector("td.player1Score").innerHTML =(scorePlayer1);
            document.querySelector("td.player2Score").innerHTML =(scorePlayer2);
        } 
    }, 2500); 
} 

//[Depreciated : Was updating the score only after rolling the next dice] Function to display the score in the table
// function writeScore(){
// document.querySelector("td.player1Score").innerHTML =(scorePlayer1);
// document.querySelector("td.player2Score").innerHTML =(scorePlayer2);
// scorePlayer1.update();
// scorePlayer2.update();
// }
