// 1. Select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// 2. When I submit the form add a new element
form.addEventListener('#submit', e => {
    e.preventDefault();
    console.log(input.value)
})