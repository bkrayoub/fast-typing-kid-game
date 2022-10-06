const words = document.getElementById('words');
const inputedWord = document.getElementById('wordInput')
const scoreDisplay = document.getElementById('myScore')
const timer = document.getElementById('timer')
const yourScore = document.getElementById('yourScore')
const bestScore = document.getElementById('yourBestScore')

const vocabulary = ['red', 'yellow', 'black', 'white', 'blue', 'green', 'grey','banana', 'cat','dog','car','facebook','book','chocolate', 'orange', 'cow','monkey','sun'];
var score = 0;
var time = 20;


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
        yourScore.innerText = score
        document.getElementById('finalform').style.top = '0px'
        if(score >= 5){
            document.getElementById('res').innerText = 'Congratulations!'
            document.getElementById('comment').innerHTML = "You won this round! Do you want to play again?"
        }
        else {
            document.getElementById('res').innerText = 'Good luck next time you lost'
            document.getElementById('comment').innerHTML = "Unfortunately, you didn't collect enough points to win Try again"
        }
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
    let time = 20;
    timer.innerHTML = time;
    scoreDisplay.innerHTML = score + '/5';
    init()


}
