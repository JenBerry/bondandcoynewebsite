$(document).foundation();


function showToggle($container,$button){
	if ($container.hasClass('truncated')){
		$button.html('<i class="fi-minus alt-color"></i> Read Less');
		$contentHeight = $container.children($('.trucateContent')).height();
		$container.css('height',$contentHeight);
	}
	else{
		$button.html('<i class="fi-plus alt-color"></i> Read More');
	}

	$container.toggleClass('truncated');
}

function showMenu(){
	$screenHeight = $(window).height();
	$('.screenHeight').css('min-height',$screenHeight);

	$("#mainMenuButton").html('<i class="fi-x"></i><br><span>Close</span>');
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
	$("#mainMenuButton").html('<i class="fi-list"></i><br><span>Menu</span>');
	$("#mainMenuPane").hide();
	$('#hideOnMenu').show();
}
function toggleMenu(){
	if ($("#mainMenuPane").css('display') == 'none')
		{showMenu();}
	else
		{hideMenu();}
	
}