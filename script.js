let keepPlaying = true;

function game () {
while (keepPlaying === true) {
//first step is to enter your choice into prompt
let promptPerson = prompt("Enter R P or S");
console.log(promptPerson);

//makes the prompt upper case
let promptPerson = promptPerson.toUpperCase();
console.log(promptPerson);

//array of choices the computer chooses from
const computerChoices = ["R", "P", "S"];

//the computer chooses a letter at random
let randomChoice = Math.floor(Math.random()*computerChoices.length);
let computerChoice = computerChoices[randomChoice];
console.log(randomChoice);

//if proper choice is made return the choice. if not return invalid

const inputReturn = function () 
{if (promptPerson === "R") {
    return "You have chosen Rock"
}

else if (promptPerson === "P" ) {
    return "You have chosen Paper"
}

else if (promptPerson === "S") {
    return "You have chosen Scissors"
}

else {
    return "invalid choice"
}

//if invalid choice, quit game and display results
if (inputReturn() === "invalid choice") {
    return
};

if (promptPerson === "R") {
    if (computerChoice === "P") {
        alert("Computer wins")
    }
    else if (computerChoice === "S") {
        alert("You win")
    }
    else {
        alert("You tie")
    }
}

if (promptPerson === "P") {
    if (computerChoice === "S") {
        alert("Computer wins")
    }
    else if (computerChoice === "R") {
        alert("You win")
    }
    else {
        alert("You tie")
    }
}

if (promptPerson === "S") {
    if (computerChoice === "S") {
        alert("Computer wins")
    }
    else if (computerChoice === "R") {
        alert("You win")
    }
    else {
        alert("You tie")
    }
}



let keepPlaying = confirm("Play again?")

}   //while loop
}   //final function

game();










    
