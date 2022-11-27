function app() {
    const form = document.querySelector('#form')
    const inputs = document.querySelectorAll('input')
    const special = document.querySelector('#special')
    const describe = document.querySelector('#describe')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        inputs.forEach(input => console.log(input.value))
    })
    special.addEventListener('change', (event) => {
        if (event.target.checked) {
            describe.style.display = 'none'
        }
        else {
            describe.style.display = 'block'
        }

    })


}

window.onload = app

