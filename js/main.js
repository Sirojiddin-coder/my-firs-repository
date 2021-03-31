$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

    var prev = $("div.owl-nav button.owl-prev");
    var next = $("div.owl-nav button.owl-next");

    $("<i class ='fa fa-angle-left'> </i>").appendTo(prev);
    $("<i class ='fa fa-angle-right'> </i>").appendTo(next);
    
    $("div.owl-nav button").addClass('buttons');

    $("<div class='prev box'> <img src=''> </div>").appendTo(prev);
    $("<div class='next box'> <img src=''> </div>").appendTo(next);

    $("div.owl-nav button").hover(function() {
        var imgL = $("div.owl-item.active").prev().children().children('img').attr("src");
        var imgR = $("div.owl-item.active").next().children().children('img').attr("src");
        $("div.prev img").attr("src", imgL);
        $("div.next img").attr("src", imgR);
    }, function() {

    });
});

    