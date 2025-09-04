// First - Section - Slider ------
$('.first-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        641: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});


// Four - Section - Slider ------
$('.four-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 20,
        },
        641: {
            items: 2,
            margin: 20,
        },
        1025: {
            items: 3,
        }
    }
})



// Five - Section - Slider ------
$('.five-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});




// Six - Section - Slider ------
$('.six-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
             margin: 20,
        },
        768: {
            items: 2,
             margin: 20,
        },
        1000: {
            items: 3,
        }
    }
})




// Seven - Section - Slider ------
$('.seven-section .owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
             margin: 20,
        },
        768: {
            items: 2,
             margin: 20,
        },
        1000: {
            items: 2,
        }
    }
});



// Eight - Section - Slider ------
$('.eight-section .owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
             margin: 20,
        },
        768: {
            items: 2,
             margin: 20,
        },
        1000: {
            items: 3,
        }
    }
});


// Mobile - Menu --------------------
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "right-front"
            },
            "theme": "white",
            "iconbar": {
                "use": true,
                "top": [
                    "<a href='#/'><i class='fa fa-home'></i></a>"
                ],
                "bottom": [
                    "<a href='#/'><i class='fa-solid fa-envelope'></i></a>",
                    "<a href='#/'><i class='fa-solid fa-arrow-right-to-bracket'></i></a>",
                    "<a href='#/'><i class='fa-solid fa-user'></i></a>"
                ]
            },
            "navbars": [
                {
                    "position": "top",
                    "content": [
                        "searchfield"
                    ]
                },
                {
                    "position": "top",
                    "content": [
                        "prev",
                        "title"
                    ]
                }
            ]
        });
    }
);