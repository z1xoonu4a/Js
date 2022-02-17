const counter = document.querySelector('#counter')
const buttonStart = document.querySelector('#start')
const buttonPause = document.querySelector('#pause')
const buttonReset = document.querySelector('#reset')

let intervalId = 0
let count = 0

buttonStart.addEventListener('click', startTimer)
buttonPause.addEventListener('click', pauseTimer)
buttonReset.addEventListener('click', resetTimer)

function startTimer() {
	intervalId = setInterval(() => {
		counter.innerText = count++
	}, 700)
}

function pauseTimer() {
	clearInterval(intervalId)
}

function resetTimer() {
	counter.innerText = count = 0
	clearInterval(intervalId)
}
