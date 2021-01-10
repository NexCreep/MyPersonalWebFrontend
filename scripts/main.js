$(document).ready(()=>{
    $("#ScrollB").click(()=>{
        $("html, body").animate({
            scrollTop: $("#bye").offset().top
        }, 500)
    });
    $("#ScrollA").click(()=>{
        $("html, body").animate({
            scrollTop: $("#hello").offset().top
        }, 500)
    })
})