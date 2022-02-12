const inputTodo = document.querySelector('#todo-input')
const todoFrom = document.querySelector('#todo-form')
const listTodo = document.querySelector('#todo-list')
const button = document.querySelector('button')

todoFrom.addEventListener('submit', fromHandler)

function fromHandler(event) {
	event.preventDefault()

	const valueInput = inputTodo.value
	const li = document.createElement('li')
	const ul = document.querySelector('ul')

	if (valueInput.length >= 1) {
		li.innerText = valueInput
		ul.append(li)
	}
}
