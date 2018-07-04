$(document).ready(function(){
    $(".burger-menu").click(function(){
        $(".collapse-panel").toggleClass("opened");
        $("body").toggleClass("overflow-hidden");
    });
});