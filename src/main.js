

let navbar = $(".navbar");

$(window).scroll(function () {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() + 1500 > oTop) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky")
    }
});


let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        }
        );
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1")
    }
});


// Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() + 1000 > oTop) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}