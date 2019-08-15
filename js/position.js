var photoes_height = $('#content_photoes').offset().top
var log_height = $('#content_log').offset().top
var about_height = $('#content_about').offset().top
function position(obj,hi){
    obj.hover(function (){
        obj.css('background-color', 'rgba(0,0,0,0.5)')
    },function (){
        obj.css('background-color', '')  
    }) 
    obj.click(function (){
        $('html,body').animate({
            scrollTop: hi
        },500)
    })
}
position($('.about_me'),about_height)
position($('.photoes'),photoes_height)
position($('.log'),log_height)