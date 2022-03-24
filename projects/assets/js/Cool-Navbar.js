
$(document).ready(function(){
console.log("ready!");
$(window).scroll(function() {
    if ($("#main-navbar").offset().top > 50) {
        $("#main-navbar").addClass("navbar-fixed-top");
    } else {
        $("#main-navbar").removeClass("navbar-fixed-top");
    }
});
});