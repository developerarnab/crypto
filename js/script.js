// ----------counter no

$(document).ready(function () {

    $(".countno").counterUp({

        delay: 10,
        time: 1800,

    });


});

// -----------  testimonial slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
        
    }
})

// --------- preloader

setTimeout(function () {

    $('.loader').fadeToggle();

}, 7200);

// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})

//   end navmenu
const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})
















