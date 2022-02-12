const input = document.querySelector('#todo-input')
const list = document.querySelector('#todo-list')
const button = document.querySelector('button')

const ul = document.querySelector('ul')
const li = document.createElement('li')

li.append((li.innerText = input.value))
z
if (input.value.length <= 1) {
	input.oninput = button.onclick = function (event) {
		ul.append(li)
	}
}
