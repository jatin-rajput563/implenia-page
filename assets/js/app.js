const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.getElementById("rotats").classList.toggle("rotate42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}

$('.slider-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".left-arrow",
    nextArrow: ".right-arrow",
    responsive: [
        {
            breakpoint: 856,
            settings: {
                prevArrow: false,
                nextArrow: false,
                dots: true,
            }
        },
    ]
});