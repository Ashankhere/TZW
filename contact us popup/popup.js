$(document).on('click', '#open-modal', function(){  
    $('#form-wrap').show().removeClass('slideOutUp faster').addClass('slideInUp faster') 
    // $('body, html').css({'overflow': 'hidden'}) 
})

$(document).on('click', '#close-modal', function(){ 
    $('#form-wrap form, #thank-you').fadeOut('fast') 
    setTimeout(function(){ 
        $('#form-wrap').css({'height': '150%'})
    }, 300)
    setTimeout(function(){ 
        $('#form-wrap').removeClass('slideInUp faster').addClass('slideOutUp faster')
    }, 600) 
})

$(document).on('animationend', '#form-wrap', function(){ 
    if ( $(this).hasClass('slideOutUp') ) {
        $(this).hide()   
        $('#form-wrap').css({'height': '100%'}) 
        // $('body, html').css({'overflow': 'auto'}) 
    }else{
        $('#form-wrap form').fadeIn()  
    }
}) 