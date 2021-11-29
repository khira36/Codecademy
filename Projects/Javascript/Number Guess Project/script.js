let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);

};
// console.log(generateTarget()); //

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    
    //If human guess exceeds range//
    const alert = () => {
        if (humanGuess < 0 || humanGuess > 9) {
            return 'Human Guess exceeded range of 0 to 9.'
        } else {
            return 'Valid Guess'
        };
    };
    console.log(alert());

    //If tied(both guesses are the same), then human wins//
    if (humanGuess === computerGuess) {
        return true;
    }; 

    if (humanGuess !== computerGuess) {
    let humanRange = Math.abs(humanGuess - targetGuess);
    let computerRange = Math.abs(computerGuess - targetGuess);
        //Return true if human wins, false if computer wins//
        if (humanRange < computerRange){
            return true;
        } else if (computerRange < humanRange) {
            return false;
        };
    };

    
};

/*check*/
console.log(compareGuesses(10,2,5)); 

const updateScore = (winner) =>{
   
    if (winner === 'human') {
        return humanScore += 1;
    } else if (winner === 'computer') {
        return computerScore +=1;
    };
};
/* check
console.log(updateScore('computer'));
console.log(`Pc score is ${computerScore}`);
console.log(`Human score is ${humanScore}`); */

const advanceRound = () => {
    return currentRoundNumber +=1;
};
/* Check
console.log(advanceRound());
console.log(`current rd is ${currentRoundNumber}`);*/