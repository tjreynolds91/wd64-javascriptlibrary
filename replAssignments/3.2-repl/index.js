function playAgain(){
    let randoNum = Math.floor(Math.random() * 10) + 1;
    console.log(randoNum);
    let gameLost = false;


    for(let i = 0; i <3; i++)  {
        let input = parseInt( prompt('Give it a try! You have 3 chances to guess the correct number ranging from 1 to 10.'));
        if( input === randoNum) {
        
            break;

        }
        else if( input < randoNum && i < 2) {
            alert('WRONG! You are too low. Keep trying, there will be cake...');
        

        }
        else if( input > randoNum && i < 2) {
            alert('WRONG! You are too high. Lay off the canabis. Try again.');

        }
        else{
            gameLost = true;
            
        }
    };


    if (!gameLost ) {
        alert("Congratulations, you've won! But there is no cake..." );
    }
    else {
        alert(`YOU LOSE! The correct answer is ${randoNum}.`);
    }
}


while(true) {
    playAgain()
    let input = prompt('Would you like to play again? Type no to quit, or literally type anything to play again.');
    if(input === 'no') {
        break;
    }


}