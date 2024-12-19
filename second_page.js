
$(document).ready(function() {
   
    $("#about_me").animate({
        opacity: 1  
    }, 2000); 
});




$(document).ready(function() {
    setTimeout(function() {
        $("#me").animate({
            right: "0",
            opacity: 1
        }, 5000); 
    }, 2000); 
});





$(document).ready(function() {
    $(".link").on("mouseenter", function() {
        $(this).css("color", "orange");
    });

    $(".link").on("mouseleave", function() {
        $(this).css("color", "blue");
    });
});



