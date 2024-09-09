// JavaScript

var elements = document.querySelectorAll('.a'); 
var eluments = document.querySelectorAll(".b");

window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

    elements.forEach(function(element) {
        element.classList.toggle("txtAni", window.scrollY > 0);
    });

    eluments.forEach(function(element) {
        element.classList.toggle("txtAni", window.scrollY > 0);
    });
});


var menu = document.querySelector(".cont-mobile");
var btnMenu = document.querySelector(".btn-botao");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll", menu.classList.contains("active"), btnMenu.classList.toggle("img"));
});

// Adiciona um listener para fechar o menu se você clicar fora dele
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
        menu.classList.remove('active');
        document.body.classList.remove("no-scroll");
    }
});



// JavaScript
