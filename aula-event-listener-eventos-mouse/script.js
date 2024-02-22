const imputQt = document.getElementById("quantidade-produto-01")
const btQt = document.getElementById("btn-adicionar-produto-01")
const btQtSub = document.getElementById("btn-subtrair-produto-01")
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
 
let subtotalInfo = {
  quantidade: imputQt.value,
  valor: 11.66,
};
 
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

function atualizaSubtotal(){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = Math.fround((subtotalInfo.valor) * imputQt.value).toFixed(2);
}
function adicionarQuantidade(){
    //Manipular valor do Imput
    imputQt.value = Number(imputQt.value) + 1
 
    //Manipular valor quantidade no objeto subtotalinfo
    subtotalInfo.quantidade = Number(subtotalInfo.quantidade) +1
 
    atualizaSubtotal()
}

function subtraiQuantidade(){
    if (imputQt.value > 0){
        imputQt.value = Number(imputQt.value) - 1
        //Manipular valor quantidade no objeto subtotalinfo
        subtotalInfo.quantidade = Number(subtotalInfo.quantidade) - 1
        atualizaSubtotal()
    }
}


btQt.addEventListener('click',adicionarQuantidade)
btQtSub.addEventListener('click',subtraiQuantidade)