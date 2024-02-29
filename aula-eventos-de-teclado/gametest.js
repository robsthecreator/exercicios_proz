let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0
let distanciaDeCima = 0
let distanciaDeBaixo = 0


document.addEventListener('keydown', (e)=>{
 keyText.innerText = e.key;
 codeText.innerText = e.code;
})

document.addEventListener("keydown", (e) => {
  if(e.code == "ArrowRight"){
    distanciaDaEsquerda = distanciaDaEsquerda + 10
    console.log(distanciaDaEsquerda);
 
    quadrado.style.left = distanciaDaEsquerda + "px"
  }
})
document.addEventListener("keydown", (e) => {
  if(e.code == "ArrowDown" && distanciaDeCima >= 0){
    distanciaDeCima = distanciaDeCima + 10
    console.log(distanciaDeCima);
 
    quadrado.style.top = distanciaDeCima + "px"
  }
})
document.addEventListener("keydown", (e) => {
  if(e.code == "ArrowUp" && distanciaDeBaixo >= 0){
    distanciaDeBaixo = distanciaDeBaixo + 10
    console.log(distanciaDeBaixo);
 
    quadrado.style.bottom = distanciaDeBaixo + "px"
  }
})