// api.js

// Seleção de elementos
var elements = document.querySelectorAll('.a'); 
var eluments = document.querySelectorAll(".b");

// Função para atualizar classes de scroll
function handleScroll() {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

    elements.forEach(function(element) {
        element.classList.toggle("txtAni", window.scrollY > 0);
    });

    eluments.forEach(function(element) {
        element.classList.toggle("txtAni", window.scrollY > 0);
    });
}

// Adiciona o evento de scroll
window.addEventListener("scroll", handleScroll);

// Seleção do menu e botão
var menu = document.querySelector(".cont-mobile");
var btnMenu = document.querySelector(".btn-botao");

// Função para alternar o menu
function toggleMenu() {
    var isActive = menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll", isActive);
    btnMenu.classList.toggle("img", isActive);
}

// Adiciona o evento de click no botão do menu
btnMenu.addEventListener("click", toggleMenu);

// Fecha o menu se clicar fora dele
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
        menu.classList.remove('active');
        document.body.classList.remove("no-scroll");
        btnMenu.classList.remove('img'); // Garantir que a classe do botão também é removida
    }
});
