const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Meu Primeiro Projeto";
link.innerText = "ProZed Educação";
listaNaoOrdenada.innerHTML = `
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
`
listaOrdenada.innerHTML = `
    <li><a href="https://github.com/robsthecreator">Meu Github</a></li>
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://blonded.co">blonded.co</a></li>
`