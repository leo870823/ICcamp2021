
$(document).ready(function(e) {

	
	$('.schebtn').click(function(e) {
		var sid = $(this).attr("sid");
        $('.pb-panel, .pb-panel-sche').hide();
		var pitem = $('.'+sid+'-panel');
		pitem.show();
        $('.popbox').show();
		if( winW > 768 ){
			pitem.css('max-height',winH * 0.8 );
		}else{
			pitem.css('max-height',winH);
			pitem.css('height',winH);
		}
		$('body').css('overflow','hidden');
    });
	$('.popbox, .signup-closebtn').click(function(e) {
        $('.popbox').fadeOut();
		$('body').css('overflow','auto');
		
    });
	
});


$(window).load(function(e) {
    $('.blurpre-start').addClass('blurout');
});

$(window).resize(function(e) {
	winW = $(window).width();
	winH = $(window).height();
    $('#cover, #cover-cont').height(winH);
	if( winW > 768 ){
		$('.signup-panel, .pb-panel-sche').css('max-height',winH * 0.8 );
	}else{
		$('.signup-panel, .pb-panel-sche').css('max-height',winH);
	}
});
