var wins = 0;
var losses = 0;
var ties = 0;

var userPlay = window.confirm("Do you want to play Rock Paper Scissors?");

if (userPlay === true) {

    function playGame() {
        
        var userChoice = window.prompt ("Type 'R' for Rock, 'P' for Paper, or 'S' for Scissors!");
        userChoice = userChoice.toUpperCase();
        var options = ["R", "P", "S"];
        var computerChoice = options[Math.floor(Math.random() * options.length)];

            if (userChoice === computerChoice) {
                
                ties++;
                window.alert ("The computer chose:  " + computerChoice + ".  \nIt's a tie!"+ "\nStats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
                
            } else if (
                    (userChoice == "R" && computerChoice == "S") ||
                    (userChoice == "P" && computerChoice == "R") ||
                    (userChoice == "S" && computerChoice == "P")
            ) {
                    wins++;
                    window.alert ("The computer chose: " + computerChoice + "! \nYou Won!" + "\nStats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties );

            } else {
                losses++; 
                window.alert ("The computer chose: " + computerChoice + "! \nYou Lost!" + "\nStats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
            };

        var playAgain = confirm ("Thanks for playing! Play again?");
        if (playAgain === true) {
             playGame(); 
        };
}           
} else {
    alert ("Thanks for visiting!");
}

playGame();


