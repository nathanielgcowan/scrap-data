const buttons = document.querySelectorAll("button")

document.addEventListener('click', () => {
    console.log("Clicked Document")
}, { capture: true })

document.body.addEventListener('click', () => {
    console.log("Clicked Body")
}, { capture: true })

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Clicked Button")
    })
})