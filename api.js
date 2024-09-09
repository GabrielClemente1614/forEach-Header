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



