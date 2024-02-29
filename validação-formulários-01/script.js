// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Validar valor do input
usernameInput.addEventListener('change', function(evento) {
    let valor = evento.target.value

    if(valor.length < 4){
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameHelper.innerText = 'Nome de usuário muito curto'
    } else {
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
    }
})


// Validação E-mail
let emailInput = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById('email-helper')

emailInput.addEventListener('change', function(evento){
    let valor = evento.target.value

    if(valor.includes('@') && valor.includes('.com')){
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
    } else{
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailInput.classList.remove('correct')
        emailHelper.innerText = 'E-mail no formato incorreto'
    }
})




function mostrarPopup(input, label){
    input.addEventListener('focus', function(){
        label.classList.add('required-popup')
    })

    input.addEventListener('blur', function(){
        label.classList.remove('required-popup')
    })
}

mostrarPopup(emailInput, emailLabel)
mostrarPopup(usernameInput, usernameLabel)