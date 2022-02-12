const inputTodo = document.querySelector('#todo-input')
const countTodo = document.querySelector('#countTodo')
const todoFrom = document.querySelector('#todo-form')
const listTodo = document.querySelector('#todo-list')
const button = document.querySelector('button')

todoFrom.addEventListener('submit', fromHandler)

let count = 0
function fromHandler(event) {
	event.preventDefault()

	const valueInput = inputTodo.value
	const li = document.createElement('li')
	const ul = document.querySelector('ul')

	if (valueInput.length >= 1) {
		count++
		li.innerText = valueInput
		ul.append(li)
	}

	countTodo.innerHTML = `Todo: ${count}`
	inputTodo.value = ''
}
