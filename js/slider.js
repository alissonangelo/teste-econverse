var slideAtual = 1;
var slider = $('.slide')
var sliderCount = slider.children().length;

var lancamentoAtual = 1
var lancamento = $('#item_holder_lc');
var lancamentoCount = lancamento.children().length-3;

var maisvendidosAtual = 1
var maisvendidos = $('#item_holder_mv');
var maisvendidosCount = lancamento.children().length-3;

// setInterval(function (){
//     slider.animate({
//         marginLeft: '-=1920px'
//     },800, function (){
//         slideAtual++
//         if(slideAtual === sliderCount){
//             slideAtual = 1;
//             slider.animate({
//                 marginLeft:'0px'
//             },800)
//         }
//     })
// },5000)


$('#right_arrow').click(function(){

    
    if(slideAtual < 5){
        slider.animate({
            marginLeft: '-=1920px'
        },800)
        slideAtual++
    }else if(slideAtual === sliderCount){
        slider.animate({
            marginLeft:'0px'
        },800)
        slideAtual = 1;
    }
});

$('#left_arrow').click(function(){
   
    if(slideAtual > 1){
        slider.animate({
            marginLeft: '+=1920px'
        },800)
        slideAtual--
    }else if(slideAtual == 1){
        slider.animate({
            marginLeft:'-7680px'
        },800)
        slideAtual = 5;
    }
});

$('#right_arrow_lc').click(function(){

    if(lancamentoAtual < lancamentoCount){
        lancamento.animate({
            marginLeft: '-=400px'
        },800)
        lancamentoAtual++
    }
});

$('#left_arrow_lc').click(function(){
   
    if(lancamentoAtual > 1){
        lancamento.animate({
            marginLeft: '+=400px'
        },800)
        lancamentoAtual--
    }
});

$('#right_arrow_mv').click(function(){

    if(maisvendidosAtual < maisvendidosCount){
        maisvendidos.animate({
            marginLeft: '-=400px'
        },800)
        maisvendidosAtual++

    }
});

$('#left_arrow_mv').click(function(){
   
    if(maisvendidosAtual > 1){
        maisvendidos.animate({
            marginLeft: '+=400px'
        },800)
        maisvendidosAtual--
    }
});

$('#progress1').click(function(){
    slider.animate({
        marginLeft: '0'
    },800)
    slideAtual = 1;
});

$('#progress2').click(function(){
    slider.animate({
        marginLeft: '-1920px'
    },800)
    slideAtual = 2;

});

$('#progress3').click(function(){
    slider.animate({
        marginLeft: '-3840px'
    },800)
    slideAtual = 3;

});

$('#progress4').click(function(){
    slider.animate({
        marginLeft: '-5760px'
    },800)
    slideAtual = 4;
});

$('#progress5').click(function(){
    slider.animate({
        marginLeft: '-7680px'
    },800)
    slideAtual = 5;
});

$(document).on('click', function() {    

    console.log(slideAtual)

    if(slideAtual === 1){
        $('#progress1').attr('src','img/icons/progressbaractive.png');
    }else{
        $('#progress1').attr('src','img/icons/progressbar.png');
    }

    if(slideAtual === 2){
        $('#progress2').attr('src','img/icons/progressbaractive.png');
    }else{
        $('#progress2').attr('src','img/icons/progressbar.png');
    }

    if(slideAtual === 3){
        $('#progress3').attr('src','img/icons/progressbaractive.png');
    }else{
        $('#progress3').attr('src','img/icons/progressbar.png');
    }

    if(slideAtual === 4){
        $('#progress4').attr('src','img/icons/progressbaractive.png');
    }else{
        $('#progress4').attr('src','img/icons/progressbar.png');
    }

    if(slideAtual === 5){
        $('#progress5').attr('src','img/icons/progressbaractive.png');
    }else{
        $('#progress5').attr('src','img/icons/progressbar.png');
    }

})