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
