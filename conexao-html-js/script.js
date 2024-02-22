// Samara, Robson, Débora, Adriano

// const post02 = document.getElementById('post02');
// const formulario = document.getElementById('formulario');
// const section = document.querySelector('section');
// const data_posts = document.getElementsByClassName('post-data');
// const text_posts = document.getElementsByClassName('post-texto');

// console.log(post02.innerText)
// console.log(formulario.innerText)
// console.log(section.innerText)
// console.log(data_posts[0].innerText)
// console.log(data_posts[1].innerText)
// console.log(text_posts[0].innerText)
// console.log(text_posts[1].innerText)


const linkPrimeiroPost = document.querySelector("#post01 .post-texto a");
console.log(linkPrimeiroPost);


const negritoSegundoPost = document.querySelector("#post02 .post-texto strong");
console.log(negritoSegundoPost);


const nameInput = document.querySelector("#nome");
console.log(nameInput);


const footerLinks = document.querySelectorAll("footer .lista_redes a");
footerLinks.forEach(link => console.log(link));


const navLinks = document.querySelectorAll("nav li a");
navLinks.forEach(link => console.log(link));


const negritoAutorData = document.querySelectorAll(".post-autor strong, .post-data strong");
negritoAutorData.forEach(element => console.log(element));


//- post02
// -formulario
// - section 
// - data dos posts
// -textos dos post

// - O link dentro do texto do primeiro post

// - A palavra em negrito dentro do texto do segundo post
// - O input de nome do formulário
// - Os links da lista de redes no final da página
// - Os links da navegação (só os links, não os elementos de lista)
// - Os 4 "Autor:" e "Data:" em negrito nos dois posts'