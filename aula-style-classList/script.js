const userName = document.querySelector('input')
userName.classList.remove('error')

const p = document.querySelectorAll('.error-text')[0]
p.classList.remove('visible')



const pUsuario = document.querySelectorAll('input')[0]
pUsuario.classList.add('correct')

const pSenha = document.querySelectorAll('.error-text')[1]
pSenha.classList.add('visible')

const inputSenha = document.querySelectorAll('input')[1]
inputSenha.classList.add('error')
