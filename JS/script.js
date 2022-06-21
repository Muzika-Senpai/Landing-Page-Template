$( document ).ready(function(){

    $(".burger").click(function(){

        console.log("burger was clicked");

        $(".burger-menu").addClass("slide-in");

    });

    $(".close-burger").click(function(){

        console.log("close burger was clicked");

        $(".burger-menu").removeClass("slide-in");

    });

    

    $(window).scroll(function(){

        if ($(this).scrollTop() >= 500) {

            $('.toTop').fadeIn(1000);

        } else {

            $('.toTop').fadeOut(1000);

        }


    })

    // $('.toTop').click(function(){

    //     $('html, body').animate({scrollTop : 0});

    //     return false;

    // });

    $('.cta-slide-down').click(function(){

        console.log("slide down function is launched");

        var button = $(this);

        var text = $(this).text();

        console.log(text);

        if(text == 'READ MORE'){

            console.log('text ' + text);

            
            $('.hidden-article').animate({
                
                opacity: "1",
                height: "toggle"

            }, 1000);

            $('.cta-slide-down').text('READ LESS');

        }else{

            console.log('text ' + text);

           
            $('.hidden-article').animate({

                opacity: "0",
                height: "toggle"

            }, 1000);
            
            $('.cta-slide-down').text('READ MORE');

        }


    })

    $('.cta-flip').click(function(){

        console.log("rotate fucntion is launched");
        $('.flip-card-inner').toggleClass('rotate');

    })

});