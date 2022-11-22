$(document).ready(function(e) {
    $("#main-frame").fadeToggle(100).delay(200).fadeIn(500);
    
    $('#nav1').on('click', function(){
        $("#main-frame").fadeToggle(50).delay(50).fadeToggle(400);
        $('#main-frame').attr('src', 'main.html');
    });

    $('#nav2').on('click', function(){
        $("#main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#main-frame').attr('src', 'volkswagen.html');
    });

    $('#nav3').on('click', function(){
        $("#main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#main-frame').attr('src', 'productos.html');
    });
    
    $('#nav4').on('click', function(){
        $("#main-frame").fadeToggle(50).delay(50).fadeToggle(400);	
        $('#main-frame').attr('src', 'contacto.html');
    }); 
});