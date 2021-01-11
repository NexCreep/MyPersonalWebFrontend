$(document).ready(()=>{
    $("#ScrollB").click(()=>{
        $("html, body").animate({
            scrollTop: $("#box-a").offset().top - 200
        }, 500)
    });
    $("#ScrollA").click(()=>{
        $("html, body").animate({
            scrollTop: $("#hello").offset().top
        }, 500)
    });
    $(window).scroll(()=>{
        
    });
    $("#box-a").hide()
        .fadeIn(1000);
})