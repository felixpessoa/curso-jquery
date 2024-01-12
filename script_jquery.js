// Estrutura do jQuery
// $(seletor).ação();

jQuery(function() {
//    função usado para chamar algo quando clica no butão
//     $('button').on('click', function() {
// //        funçao hide que esconde algo
//         $('h1').hide();
//     });

//     funçao css que altera a cor de todos h1
    // $('button').on('click', function() {
    //     // função css recebe dois parâmetros, a propriedade e o valor
    //     $('h1').css("color", "red")
    // });

    // função que altera a cor com base no id
    // $('button').on("click", function() {
    //     $('#unico').css("color", "red");
    // });

    $('#azul').on("click", function(){
        $('p').css("background-color", "blue");
        // //função fadeOut esconde algo em 0.5 segundos, diferente do hide que esconde de uma vez
        // $('p').fadeOut();
         //é passado o 'slow' para o tempo de exibição
        //ou 'fast' para o tempo de exibição padrao 
        $('p').fadeOut('slow');
        // função delay faz algo depois de um tempo em milissegundos 1000 = 1 segundo
        $('p').delay(3000);
        //função fadeIn mostra algo
        //primeiro o 'p' some por conta do fadeOut e depois de 3 segundos por conta do delay, ele aparece por conta do fadeIn.
        $('p').fadeIn();
    });

    // $('#vermelho').on('click', function(){
    //     $('p').css("background-color", "red");
    //     $('#mensagem').text("Cor alterada com sucesso!");
    //     $('#mensagem').css("color", "red");
    //     $('#mensagem').css('border', '1px solid red');
    //     $('#mensagem').delay(3000);
    //     $('#mensagem').fadeOut();
    // });

    //Encadeamento em bloco
    // $('#vermelho').on('click', function(){
    //     $('p').css("background-color", "red");
    //     $('#mensagem')
    //         .text("Cor alterada com sucesso!")
    //         .css("color", "red")
    //         .css('border', '1px solid red')
    //         .delay(3000)
    //         .fadeOut();
    // });
   
   //Declaração múltipla de CSS
    $('#vermelho').on('click', function(){
        $('p').css("background-color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso!")
            .css({color: 'red', border: '1px solid red'})
            .delay(3000)
            .fadeOut()
            //para chamar uma class em jquery
            .addClass('green')
            
        $('#vermelho')
            //para remover uma class
            .removeClass('red');
    });
});

