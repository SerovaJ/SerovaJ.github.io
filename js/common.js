
/*Блок Направления*/

$(document).ready(function(){

	$(".portfolio_list li").hover(function(){
		$(this).find(".hover_block").slideToggle(600).css("display", "flex");
	})

});


/* Формы */
$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function(event) { //Change
		event.preventDefault();
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	
});



/*Плавная прокрутка к анкорам*/

$(document).ready(function(){
	$("nav.main_menu").on("click","a", function (event) {
		event.preventDefault();
		let idBlock  = $(this).attr('href'),
		top = $(idBlock).offset().top - 200;
	
		$('body,html').animate({scrollTop: top}, 1200);
	});
});
	
	

/*Меню на мобильных устройствах*/


document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#my-menu" ),
            "(max-width: 991px)"
            );

        const navigator = menu.navigation({
          title: 'Меню'


      });
        const drawer = menu.offcanvas({
        	position: 'right'
        });

        document.querySelector( "a[href='#my-menu']" )
        .addEventListener( "click", ( evnt ) => {
            evnt.preventDefault();
            drawer.open();
        });
    }
    );



