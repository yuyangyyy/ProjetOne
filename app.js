let body = document.querySelector('body')
let darkModeDiv = document.querySelector('.dark-mode')
let darkModeDivInputCheckbox = darkModeDiv.querySelector('input')

function toggleBackground(e) {
    if (e.target.checked === true) {
        body.classList.add('theme-dark')
        alert('Black theme enabled')
    } else {
        body.classList.remove('theme-dark')
    }
}

darkModeDivInputCheckbox.addEventListener('change', function(event) {
    toggleBackground(event)
})