/* slider slick */

$('.single-item').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: true,
    cssEase: 'linear'
});

/* mobile-menu */

let navigation = document.querySelector(".navigation");
let navMobileMenu = document.querySelector(".nav-mobile-menu");
let menuLinks = document.querySelectorAll(".menu-link");

navMobileMenu.addEventListener("click", function() {
    navMobileMenu.classList.toggle("active-menu");
    if (navMobileMenu.classList.contains("active-menu")) {
        navigation.classList.add("active-menu") 
        document.body.style.overflow = "hidden";
    } else {
        navigation.classList.remove("active-menu") 
        document.body.style.overflow = "auto";
    }
})

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        navigation.classList.remove("active-menu");
        navMobileMenu.classList.remove("active-menu");
        document.body.style.overflow = "auto";
    })
})

/* show more */

let buttonAssortmentMore = document.querySelector(".button-show-more-assortment");
let showMoreAssortment = document.querySelector(".assortment-more");

buttonAssortmentMore.addEventListener("click", function(e) {
    e.preventDefault();
    showMoreAssortment.classList.remove("hide"),
    buttonAssortmentMore.classList.add("hide")
});

let buttonAssortmentFilling = document.querySelector(".button-show-more-filling");
let showMoreFilling = document.querySelector(".filling-more");

buttonAssortmentFilling.addEventListener("click", function(e) {
    e.preventDefault();
    showMoreFilling.classList.remove("hide"),
    buttonAssortmentFilling.classList.add("hide")
});

/* scrollup button */

$(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

/* animation AOS */
AOS.init();
