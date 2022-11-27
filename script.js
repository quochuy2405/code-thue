function app() {
    const form = document.querySelector('#form')
    const inputs = document.querySelectorAll('input')
    const buttonSubmit = document.querySelector('#btn-submit')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        inputs.forEach(input => console.log(input.value))
    })
    buttonSubmit.addEventListener('click', (e) => {
        console.log('is onClick')
    })

}

window.onload = app

