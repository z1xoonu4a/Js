const counter = document.querySelector('#counter')
const buttonStart = document.querySelector('#start')
const buttonPause = document.querySelector('#pause')
const buttonReset = document.querySelector('#reset')

let intervalId = 0
let count = 0

buttonStart.addEventListener('click', () => {
	intervalId = setInterval(() => {
		counter.innerText = count++
	}, 700)
})

buttonPause.addEventListener('click', () => {
	clearInterval(intervalId)
})

buttonReset.addEventListener('click', () => {
	counter.innerText = count = 0
	clearInterval(intervalId)
})
