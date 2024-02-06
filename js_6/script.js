// div e h1 criados
let divTitulo = document.createElement('div');
let elementoTitulo = document.createElement('h1');


// o titulo, estilo e id.
elementoTitulo.id = "titulo"
elementoTitulo.innerText = "Titulo da Pagina"
elementoTitulo.style = "text-align: center; color: blue; background-color: cyan;"




// append child da div para o body da página e do titulo para a div
document.body.appendChild(divTitulo)
divTitulo.appendChild(elementoTitulo)