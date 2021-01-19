$(document).ready(()=>{
    $(".ScrollB").click(()=>{
        $("html, body").animate({
            scrollTop: $("#box-a").offset().top - 200
        }, 500)
    });
    $(".ScrollA").click(()=>{
        $("html, body").animate({
            scrollTop: $("#box-b").offset().top - 100
        }, 500)
    });
    $(".ScrollC").click(()=>{
        $("html, body").animate({
            scrollTop: $("#box-c").offset().top - 100
        }, 500)
    });
    $("#box-a").hide()
        .fadeIn(1000);
})