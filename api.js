// api.js


var elements = document.querySelectorAll('.a'); 
var eluments = document.querySelectorAll(".b");


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


window.addEventListener("scroll", handleScroll);


var menu = document.querySelector(".cont-mobile");
var btnMenu = document.querySelector(".btn-botao");


function toggleMenu() {
    var isActive = menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll", isActive);
    btnMenu.classList.toggle("img", isActive);
}


btnMenu.addEventListener("click", toggleMenu);


document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
        menu.classList.remove('active');
        document.body.classList.remove("no-scroll");
        btnMenu.classList.remove('img'); 
    }
});

var res1 = document.querySelector('.res1')
var res2 = document.querySelector('.res2')
var res3 = document.querySelector('.res3')
var btn1 = document.querySelector('.btn-1')
var btn2 = document.querySelector('.btn-2')
var btn3 = document.querySelector('.btn-3')






    btn3.addEventListener("click", function() {
      
        if (res3.style.display === "block") {
               document.querySelector('.img-c').src = "chevron_right_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png"
            res3.classList.add('animaTXTOut');
            setTimeout(() => {
                res3.style.display = "none";
              
                res3.classList.remove('animaTXTOut');
               
            }, 600); 

        } else {
           
            res3.style.display = "block";
           
           
            res3.classList.remove('animaTXTOut');
            res3.classList.add("animaTXT");
            document.querySelector('.img-c').src = "close_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
        }
    });

    btn2.addEventListener("click", function() {
        
        if (res2.style.display === "block") {
               document.querySelector('.img-b').src = "chevron_right_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png"
            res2.classList.add('animaTXTOut');
            setTimeout(() => {
                res2.style.display = "none";
              
                res2.classList.remove('animaTXTOut');
               
            }, 600); 
        } else {
           
            res2.style.display = "block";
           
           
            res2.classList.remove('animaTXTOut');
            res2.classList.add("animaTXT");
            document.querySelector('.img-b').src = "close_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
        }
    });

    

    btn1.addEventListener("click", function() {
        
        if (res1.style.display === "block") {
               document.querySelector('.img-a').src = "chevron_right_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png"
            res1.classList.add('animaTXTOut');
            setTimeout(() => {
                res1.style.display = "none";
              
                res1.classList.remove('animaTXTOut');
               
            }, 600); 

        } else {
         
            res1.style.display = "block";
           
           
            res1.classList.remove('animaTXTOut');
            res1.classList.add("animaTXT");
            document.querySelector('.img-a').src = "close_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
        }
    });

