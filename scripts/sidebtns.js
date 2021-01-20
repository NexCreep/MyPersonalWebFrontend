if (window.matchMedia("(min-width: 800px)").matches){
    window.onscroll = function(){scrollfunction()};

    var sidebar = document.getElementById("side-buttons");

    function scrollfunction(){
        if(window.pageYOffset >= 643){
            sidebar.style.display = "block";
        }else {
            sidebar.style.display = "none";
        }
    }
}