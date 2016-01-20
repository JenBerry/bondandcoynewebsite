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

	$("#mainMenuButton").html('<img src="img/icons/cross.png" alt=""><br><span>Close</span>');
	$("#mainMenuPane").show();
	$('#hideOnMenu').hide();
	
	$screenHeight = $(window).height();
	$menuHeight = $("#mainMenuContent").height();
	$biggerHeight= Math.max($screenHeight-80,$menuHeight);
	$('.screenHeight').css('min-height',$biggerHeight);
	$('.halfScreenHeight').css('min-height',($screenHeight-80)/2);

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

function toggleFilter($filters,$button){
	$filters.slideToggle('slow');
	$button.toggleClass('open');
}

function backToTop(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
}
function scrollToElement($element, offset){
	$('html,body').animate({
		'scrollTop': $element.offset().top-offset},
		1000);
}
function scrollToWork(){
	$headerSticky = $('#pageHeader .menu-sticky');
	if ($headerSticky.hasClass('is-stuck')){
		$offset = 80;
	} else{
		$offset = 0;
	}
	scrollToElement($('#work-module-container'),$offset);
}

function verticalCenter($element, $container){
	$elementHeight = $element.outerHeight();
	$containerHeight = $container.height();
	$elementMargin = $containerHeight/2 - $elementHeight/2;
	$element.css('margin-top',$elementMargin);
}
function setVerticalCenter(){
	$verticalCenterElements = $('.vertical-center');
	$verticalCenterElements.each(function(){
		$parent = $(this).closest($('.vertical-center-container'));
		verticalCenter($(this),$parent);
	});
}
function setVerticalCenterDelay(){
	$verticalCenterElements = $('.vertical-center-delay');
	$verticalCenterElements.each(function(){
		$parent = $(this).closest($('.vertical-center-container'));
		verticalCenter($(this),$parent);
	});
}
function setIndexPageToScreenHeight(){
	$windowHeight = $(window).height();
	$headerHeight = $windowHeight-80-124;
	$('#indexPageScreenHeight .header-height').css("max-height",$headerHeight + "px");
}

function closeTeam($team){
	$teamDescContainer = $('#teamDescContainer');
	$teamContentsHeight = $team.find($('img')).height();
	$team.height($teamContentsHeight);
	$teamDescContainer.css({
		'opacity': '0',
		'z-index' : '-1',
	});
	$team.removeClass('open');
	// $team.height('auto');
}
function teamCloseAll(){
	$openTeam = $('#teamTiles').find('.open');
	if ($openTeam){
		closeTeam($openTeam);
	}
}

function teamToggle($this){
	$parent = $this.parent();
	$teamDescContainer = $('#teamDescContainer');

	if($parent.hasClass('open')){
		closeTeam($parent);
	}
	else{
		$openTeam = $('#teamTiles').find('.open');
		if ($openTeam){
			closeTeam($openTeam);
		}

		$position = $this.position().top;
		$height = $this.height();
		$positionOfDesc = $position + $height;
		if ($openTeam){
			$currentPositionOfDesc = $teamDescContainer.position().top;
			if ($currentPositionOfDesc < $positionOfDesc && $currentPositionOfDesc > 0){
				$positionOfDesc = $positionOfDesc - $descriptionHeight;
			}
		}


		$descriptionHeight = $teamDescContainer.outerHeight(true);
		$tileHeight = $parent.height();
		$parent.height($tileHeight);
		$newHeight = $descriptionHeight + $tileHeight;
		$parent.height($newHeight);



		$teamDescContainer.css({
			'top': $positionOfDesc,
			'position': 'absolute',
			'opacity': '1',
			'z-index': '1'
		});
		$parent.addClass('open');

	}
}


$(document).ready(function(){
	setIndexPageToScreenHeight();
	setVerticalCenter();
});

$(window).on("load", function() {
	setVerticalCenterDelay();
});

$( window ).resize(function(){
	hideMenu();
	setIndexPageToScreenHeight();
	setVerticalCenter();
	setVerticalCenterDelay();
	teamCloseAll();
	$('.image-tile').height('auto');
});




