const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

async function getCourse() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	const dataJson = await response.json()

	usd.innerHTML = `${dataJson.Valute.USD.Value.toFixed(0)} рублей за доллар.`
	eur.innerHTML = `${dataJson.Valute.EUR.Value.toFixed(0)} рублей за евро.`
}

getCourse()
