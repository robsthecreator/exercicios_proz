const email = 'jeff@gmail.com'
const id = 1234

var emailUsuario = prompt("digite: ")
let idUsuario = 1234 

if(emailUsuario === email || idUsuario === id) {
  console.log('Deseja mudar a senha?')
} else {
  console.log('Usuario sem permissão !!')
}