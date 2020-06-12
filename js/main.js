let figureToCount;
let figure = 0;
let countTime = 5;
let timerCount;
let textToPrint;
let letters;
let textPart;
let letterIndex = 0;
let txtPrintTime = 100;
let timerPrint;

const txt = document.querySelector('.text');
const fig = document.querySelector('.figure');
const txtInput = document.querySelector('.txt-input');
const figInput = document.querySelector('.fig-input');
const btn = document.querySelector('.btn');

const startCountNext = () => {
    fig.textContent = figure;
    figure += 10;
    if (figure < figureToCount) startCount()
    else fig.textContent = figureToCount;
}
const startCount = () => timerCount = setTimeout(startCountNext, countTime)

const startPrintNextLetter = () => {
    txt.textContent = textPart;
    letterIndex++;
    textPart = textPart + letters[letterIndex];
    if (letterIndex < textToPrint.length) startPrintLetters()
    else startCount()
}
const startPrintLetters = () => timerPrint = setTimeout(startPrintNextLetter, txtPrintTime)

const startPrint = () => {
    if (figInput.value && txtInput.value) {
        btn.classList.add('hide-alert')
        figure = 0;
        letterIndex = 0;
        fig.textContent = '';
        txt.textContent = '';
        figureToCount = figInput.value;
        textToPrint = txtInput.value;
        letters = textToPrint.split('');
        textPart = letters[letterIndex]
        startPrintLetters()
    } else {
        btn.classList.remove('hide-alert')
    }

}

btn.addEventListener('click', startPrint)