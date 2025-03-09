const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));



/* Esse script é responsável por fazer o accordion abrir os conteúdos */

const accordions = document.querySelectorAll(".accordion"); // Seleciona todos os accordions

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header"); // Seleciona o header do accordion

  // Adiciona evento de click no header
  header.addEventListener("click", () => {  

    //chama a classe para que será exibida
    const body = accordion.querySelector(".accordion-body");
    const icon = header.querySelector("i");

    /* Ativa as classes */
    body.classList.toggle("active");
    icon.classList.toggle("rotated"); // Adiciona classe para rotacionar a seta
  });
});
