$(document).ready(function() {
    $(window).scroll(function() {
        scrollFunction();
    });
    //Get the button

    function scrollFunction() {
        var mybutton = document.getElementById("myBtn");
        if ($(window).scrollTop() > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document

});