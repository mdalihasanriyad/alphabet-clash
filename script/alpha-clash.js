// function play() {
//     // console.log('play now');
//     // step-1
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
        // step-2
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove()

// }

function handleKeyBoardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed , expectedAlphabet);

    // check match or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. you lost a life');
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyBoardButtonPress)

function continueGame(){
    const alphabet =getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // show display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // background color 
    addBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-section');
    showElementById('play-ground');
    continueGame();
}