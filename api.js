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

var res1 = document.querySelector('.res1')
var res2 = document.querySelector('.res2')
var res3 = document.querySelector('.res3')
var btn1 = document.querySelector('.btn-1')
var btn2 = document.querySelector('.btn-2')
var btn3 = document.querySelector('.btn-3')



btn1.addEventListener("click" , function() {
    if (res1.style.display === "block") {
        document.querySelector('.img-a').src = "chevron_right_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
        res1.style.display = "none";
    } else {
        res1.style.display = "block"
        document.querySelector('.img-a').src = "close_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
    }
})

btn2.addEventListener("click" , function() {
    if (res2.style.display === "block") {
        document.querySelector('.img-b').src = "chevron_right_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
        res2.style.display = "none";
    } else {
        res2.style.display = "block"
        document.querySelector('.img-b').src = "close_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
    }
})

btn3.addEventListener("click" , function() {
    if (res3.style.display === "block") {
        document.querySelector('.img-c').src = "chevron_right_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
        res3.addEventListener.toogle("animaTXT")
        res3.style.display = "none";
    } else {
        res3.style.display = "block"
        document.querySelector('.img-c').src = "close_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
    }
})



