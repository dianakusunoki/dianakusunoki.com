$(document).ready(function() {
    $(".nav-toggle").click(function(e){
        e.preventDefault();
        if($( window ).width() <= "800") {
            $("header > .header-container > nav").fadeToggle("300");
        }
    });
	
    $(document).click(function(e){
        if($( window ).width() <= "800") {
            if (!$(e.target).closest('header').length) {
                $("header > .header-container > nav").fadeOut("300");
            }
        }
    });

    $( window ).resize(function(e) {
        if($( window ).width() >= "800") {
            $("header > .header-container > nav").show();
        }
        if($( window ).width() <= "800") {
            $("header > .header-container > nav").hide();
        }
    });

    $("header > .header-container > nav > ul > li > a").click(function(e) {
        if($( window ).width() <= "800") {
            if($(this).siblings().size() > 0 ) {
                $(this).siblings().slideToggle("fast")
				$(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
	
	$('.dropdown').click(function(e){
	    $(this).find('.dropdown-menu').toggleClass('show');
	    $($(e.target).find('.down-caret').toggleClass('open-caret'));
	    e.preventDefault();
	    e.stopPropagation();
	    $(document).click(function(){
	      $('.dropdown-menu').removeClass('show');
	      $('.down-caret').removeClass('open-caret');
	    });
	  });
	
});
