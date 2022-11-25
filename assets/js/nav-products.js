$(document).ready(function(e) {
    $("#products-main-frame").fadeToggle(100).delay(200).fadeIn(500);
    
    $('#nav-link-1').on('click', function(){
        $("#products-main-frame").fadeToggle(50).delay(50).fadeToggle(400);
        $('#products-main-frame').attr('src', 'categories/iluminacion.html');
    });

    $('#nav-link-2').on('click', function(){
        $("#products-main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#products-main-frame').attr('src', 'categories/audio.html');
    });

    $('#nav-link-3').on('click', function(){
        $("#products-main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#products-main-frame').attr('src', 'categories/seguridad.html');
    });
    
    $('#nav-link-4').on('click', function(){
        $("#products-main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#products-main-frame').attr('src', 'categories/lubricantes.html');
    }); 

    $('#nav-link-5').on('click', function(){
        $("#products-main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#products-main-frame').attr('src', 'categories/accesorios.html');
    });
});