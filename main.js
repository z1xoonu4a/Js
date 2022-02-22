const idUsd = document.querySelector('#usd')
const idEuro = document.querySelector('#eur')

async function getCourse() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	const dataJson = await response.json()

	idUsd.innerHTML = `${dataJson.Valute.USD.Value.toFixed(0)} рублей за доллар.`
	idEuro.innerHTML = `${dataJson.Valute.EUR.Value.toFixed(0)} рублей за евро.`
}

getCourse()
