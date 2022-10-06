const words = document.getElementById('words');
const inputedWord = document.getElementById('wordInput')
const scoreDisplay = document.getElementById('myScore')
const timer = document.getElementById('timer')

const vocabulary = ['banana', 'tofaha', 'bti5a', 'dessert', 'maticha'];
var score = 0;
var time = 3;


function displayWord(vocabulary) {
    const randIndex = Math.floor(Math.random() * vocabulary.length);
    words.innerHTML = vocabulary[randIndex];
}
function init() {
    setInterval(countdown, 1000);
}
function countdown() {
    if (time > 0) {
        time--;
        timer.innerHTML = time;
    }
    else if (time === 0) {
        time--;
        startGame = false;
        alert('done')
    }
}


inputedWord.addEventListener('input', function () {
    if (!(inputedWord.value === '')) {
        if (inputedWord.value === words.innerText) {
            score++
            inputedWord.value = ''
            scoreDisplay.innerHTML = score + '/5';
            displayWord(vocabulary)
        }
    }
});
function start() {
    displayWord(vocabulary)
    let score = 0;
    let time = 3;
    timer.innerHTML = time;
    scoreDisplay.innerHTML = score + '/5';
    init()


}
