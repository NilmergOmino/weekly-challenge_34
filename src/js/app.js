import '../scss/style.scss';
let $ = require('jquery');

$(document).on('scroll', function(){
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 5){
        $('#site-nav').addClass('-sticky');
        $('#contact-box-heading').addClass('-fixed');
    }
    else{
        $('#site-nav').removeClass('-sticky');
        $('#contact-box-heading').removeClass('-fixed');
    }
})
$('#menu-toggle').on('click', function(){
    $('#menu-toggle').toggleClass('-close');
    $('#menu').toggleClass('-toggle');
    $('#contact-box').toggleClass('-toggle');
})
