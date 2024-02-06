// div e h1 criados
let divTitulo = document.createElement('div')
let elementoTitulo = document.createElement('h1')

// o titulo, estilo e id.
elementoTitulo.id = "titulo"
elementoTitulo.innerText = "Titulo da Pagina"
elementoTitulo.style = "text-align: center; color: blue; background-color: cyan;"

// item vendas div
let divProduto = document.createElement('div')
let produto = document.createElement('div')
divProduto.id = "produto"
divProduto.style = "border: 1px solid black; background-color: lightblue; padding: 15px; margin: 20px auto; text-align: center; border-radius: 5px;";


produto.innerHTML = `
    <h1>Tênis</h1>
    <img src="https://conteudo.imguol.com.br/c/entretenimento/ca/2021/05/05/yeezy-450-cloud-white-1620224220427_v2_1170x540.jpg" width="300px"></img>
    <p>Yeezy 450 Cloud White</p>
    <button>Comprar por 800,50R$</button>
` 

// append child da div para o body da página e do titulo para a div
document.body.appendChild(divTitulo)
divTitulo.appendChild(elementoTitulo)

// append child do produto e div
document.body.appendChild(divProduto)
divProduto.appendChild(produto)