"use strict";

// 1
let gameRunning = true;

// 2

while (gameRunning) {

    // Computeren beregner et tilfældigt tal fra 0 - 2
    const number = Math.floor(Math.random() * 101);

    // Så længe det er sandt fortsætter while loop
   while(true) {

        // Gemmer brugerinput i variabel userGuess som et number/Integer
        let userGuess = parseInt(prompt("Guess a number between 0 and 100 below"));

        // Hvis brugerinput er lavere end det computerberegnede tal, vis alert 
         if(userGuess < number) {
            alert("Your guess is too low. Try again!")
            console.log("Your guess is too low. Try again!");

        // Hvis bugerinput er højere end det computerberegnede tal, vis alert
        } else if (userGuess > number) {
            alert("Your guess is too high! Try again")
            console.log("Your guess is too high! Try again");
        
        // Hvis brugerinput er det samme som det computerberegnede tal, bryd ud af loop
        } else {
            console.log("Hooray! You guess correctly");
            alert("Your guess was correct! ");

            // Stop loop
            break;
        }
    }
}
