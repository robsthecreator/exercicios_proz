const link = document.querySelector('a')

document.addEventListener('keyup', (event) => {
    if(event.code == 'Escape'){
        link.click()
    }
})