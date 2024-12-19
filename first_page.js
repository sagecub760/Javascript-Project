$(document).ready(function() {
    $("#Family").animate({
        left: "0",
        opacity: 1  
    }, 1500); 
});

$(document).ready(function() {
    
    $("#Mom").animate({
        left: "0",
        opacity: 1  
    }, 1000); 
});

$(document).ready(function() {
    
    $("#Dad").animate({
        left: "0", 
        opacity: 1 
    }, 1000); 
});
$(document).ready(function() {
    $("#Brother").animate({
        left: "0", 
        opacity: 1 
    }, 1000); 
});
$(document).ready(function() {
    $(".link").on("mouseenter", function() {
        $(this).css("color", "orange");
    });

    $(".link").on("mouseleave", function() {
        $(this).css("color", "blue");
    });
});

