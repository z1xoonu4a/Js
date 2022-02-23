// Course
const idUsd = document.querySelector('#usd')
const idEuro = document.querySelector('#eur')

async function getCourse() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	const dataJson = await response.json()

	idUsd.innerHTML = `${dataJson.Valute.EUR.Value.toFixed(0)} рублей за доллар.`
	idEuro.innerHTML = `${dataJson.Valute.USD.Value.toFixed(0)} рублей за евро.`
}

getCourse()

// Timer
const timer = document.querySelector('#timer')
const btnStart = document.querySelector('#startTimer')
const btnStop = document.querySelector('#stopTimer')
const btnReset = document.querySelector('#resetTimer')

let timerStarted = false
let intervalId
let second = 0
let minute = 0
let hour = 0

btnStart.addEventListener('click', timerStart)
btnStop.addEventListener('click', timerStop)
btnReset.addEventListener('click', timerReset)

function timerStart() {
	if (!timerStarted) {
		timerStarted = true
		intervalId = setInterval(() => {
			if (second === 60) {
				minute++
				second = 0
				timer.innerHTML = `${hour}:${minute}:${second}`
			} else if (minute === 60) {
				hour++
				minute = 0
				timer.innerHTML = `${hour}:${minute}:${second}`
			} else {
				second++
				timer.innerHTML = `${hour}:${minute}:${second}`
			}
		}, 1000)
	}
}

function timerStop() {
	clearInterval(intervalId)
	timerStarted = false
}

function timerReset() {
	clearInterval(intervalId)
	second = 0
	minute = 0
	hour = 0
	timer.innerHTML = `${hour}:${minute}:${second}`
	timerStarted = false
}
