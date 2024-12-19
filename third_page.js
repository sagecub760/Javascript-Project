$(document).ready(function () {
    
    $("#resume").css({
        position: "absolute",
        top: "400px", 
        left: "15%", 
        transform: "translateX(-50%)",
        opacity: 0 
    });


    $("#resume").animate({
        top: "0px", 
        opacity: 1 
    }, 1000, function () {
        
        $("body").css("background-color", "lightgrey");
    });
});


$(document).ready(function() {
    $(".link").on("mouseenter", function() {
        $(this).css("color", "orange");
    });

    $(".link").on("mouseleave", function() {
        $(this).css("color", "blue");
    });
});


/*Used ChatGPT for part of the following code */

$(document).ready(function() {
    function checkVisibility() {
        $(".slide-in").each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            // Check if element is in the viewport
            if (elementTop < windowBottom) {
                $(this).addClass("in-view");
            }
        });
    }

    // Run the check when scrolling
    $(window).on("scroll", function() {
        checkVisibility();
    });

    // Run on page load to check if any elements are initially in view
    checkVisibility();
});
