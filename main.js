const idUsd = document.querySelector('#usd')
const idEuro = document.querySelector('#eur')

async function getCourse() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	const dataJson = await response.json()

	idUsd.innerText = dataJson['Valute']['EUR']['Value']
	idEuro.innerText = dataJson['Valute']['USD']['Value']
}

getCourse()
