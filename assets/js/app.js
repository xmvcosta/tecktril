const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const icon = hamburger.querySelector("i"); // Pegando o ícone dentro do botão

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Alterna os ícones entre 'fa-bars' (hambúrguer) e 'fa-times' (X)
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
