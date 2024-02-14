// function play() {
//     // console.log('play now');
//     // step-1
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
        // step-2
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove()

// }

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