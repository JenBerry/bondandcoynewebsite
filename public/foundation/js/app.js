$(document).foundation();


function showToggle($container,$button){
	if ($container.hasClass('truncated')){
		$button.html('<img src="img/icons/minus.png" alt=""> Read Less');
		$contentHeight = $container.children($('.trucateContent')).height();
		$container.css('height',$contentHeight);
	}
	else{
		$button.html('<img src="img/icons/plus.png" alt=""> Read More');
	}

	$container.toggleClass('truncated');
}

function showMenu(){
	$screenHeight = $(window).height();
	$('.screenHeight').css('min-height',$screenHeight);

	$("#mainMenuButton").html('<img src="img/icons/cross.png" alt=""><br><span>Close</span>');
	$("#mainMenuPane").show();
	$('#hideOnMenu').hide();

	$element = $('#mainMenuColumn ul');
	$containerHeight = $screenHeight - 80;
	$elementHeight = $element.outerHeight(true);
	$elementPosition = $containerHeight/2 - $elementHeight/2;
	$('#centerMenuSpace').css({
		'height': $elementPosition
	});
}
function hideMenu(){
	$("#mainMenuButton").html('<img src="img/icons/menu.png" alt=""><br><span>Menu</span>');
	$("#mainMenuPane").hide();
	$('#hideOnMenu').show();
}
function toggleMenu(){
	if ($("#mainMenuPane").css('display') == 'none')
		{showMenu();}
	else
		{hideMenu();}
	
}





