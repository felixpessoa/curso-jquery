jQuery(function(){
    $('#l1').on("click", function(){
            //esconder a imagem 1
            $('#i1').show();
            //mostrar a imagem 2
            $('#i2').hide(); 
            $('#i3').hide();
            $('#i4').hide();
        })
    $('#l2').on("click", function(){
            //esconder a imagem 1
            $('#i1').hide();
            //mostrar a imagem 2
            $('#i2').show(); 
            $('#i3').hide();
            $('#i4').hide();
        })
    $('#l3').on("click", function(){
            //esconder a imagem 1
            $('#i1').hide();
            $('#i2').hide();
            //mostrar a imagem 2
            $('#i3').show(); 
            $('#i4').hide();
        })
    $('#l4').on("click", function(){
            //esconder a imagem 1
            $('#i1').hide();
            $('#i2').hide();
            //mostrar a imagem 2
            $('#i3').hide(); 
            $('#i4').show();
        })
});