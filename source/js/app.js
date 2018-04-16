window.addEventListener("load", function(){


    tabs();
    flip.set();
    menu.slideTo();
    menu.slideOff();

    if(location.pathname == '/blog.html'){
        blogScroll.scrollPointed();
    };
    if(location.pathname == '/index.html'){
        loginForm.valid();
        loginForm.pass();
    };
    if(location.pathname == '/#'){
        loginForm.valid();
    };
    // if(location.pathname == '/work.html'){
    //     contactForm.valid();
    // };
    if(location.pathname == '/about.html'){
        contacts.down();
        setInterval(function(){
            smallSlider.doSlide();
        }, 4000);
    };

});


window.addEventListener('scroll', function(){
    blogScroll.navActiveLink();
    parallax.init($(document).scrollTop());
    blogScroll.doScroll();

});

$(document).ready(function(){

    if(location.pathname == '/about.html'){
        function initMap( ){
            var coord = {lat: 39.74, lng: -104.98}
            var elem = document.getElementById('map');
            var options = {
                zoom: 14,
                center: coord
            };
            var myMap = new google.maps.Map(elem, options);
            var marker = new google.maps.Marker({
                position: coord,
                map: myMap,
                icon: '/assets/img/marker.png'
            });

        };
        initMap();
    };

});