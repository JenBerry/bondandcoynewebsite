$(document).foundation();


function showToggle($container,$button){
	if ($container.hasClass('truncated')){
		$button.html('<img src="/img/icons/minus.png" alt=""> Read Less');
		$contentHeight = $container.children($('.trucateContent')).height();
		$container.css('height',$contentHeight);
	}
	else{
		$button.html('<img src="/img/icons/plus.png" alt=""> Read More');
	}

	$container.toggleClass('truncated');
}

function showMenu(){

	$("#mainMenuButton").html('<img src="/img/icons/cross.png" alt=""><br><span>Close</span>');
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
	$("#mainMenuButton").html('<img src="/img/icons/menu.png" alt=""><br><span>Menu</span>');
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

function closeAllTeam(){
	$openTile = $('#teamTiles .open');
	if ($openTile.length > 0){
		$currentRowSmall = $openTile.closest($('.row-container-on-small'));
		$currentRowMedium = $openTile.closest($('.row-container-on-medium'));
		$currentRowSmall.height('auto');
		$currentRowMedium.height('auto');

		$openTile.removeClass('open');
		$openTile.find($('.teamDescContainer')).css({
			'opacity': '0',
			'z-index': '-1'
		});
	}
}


function teamToggle($this){
	function closeTile($tile, $row){
		$row.height($tile.height());
		$tile.removeClass('open');
		$tile.find($('.teamDescContainer')).css({
			'opacity': '0',
			'z-index': '-1'
		});
	}

	$imageTile = $this.parent();
	$openTile = $('#teamTiles .open');
	$currentRowSmall = $imageTile.closest($('.row-container-on-small'));
	$currentRowMedium = $imageTile.closest($('.row-container-on-medium'));

	currentBreakpoint = Foundation.MediaQuery.current;
	if (currentBreakpoint == 'small'){
		$currentRow = $currentRowSmall;
	} else {
		$currentRow = $currentRowMedium;
	}


	if ($imageTile.hasClass('open')){
		closeTile($imageTile, $currentRow);
	} else {
		if ($openTile.length > 0){
			if ($currentRow.find($('.open')).length > 0){
				closeTile($openTile, $currentRow);
			} else{
				if (currentBreakpoint == 'small'){
					$openRow =  $openTile.closest($('.row-container-on-small'));
				}else{
					$openRow =  $openTile.closest($('.row-container-on-medium'));
				}
				closeTile($openTile, $openRow);
			}
		}
		$description = $this.siblings($('.teamDescContainer'));
		descHeight = $description.outerHeight(true);
		tileCurrentHeight = $imageTile.height();
		$currentRow.height(tileCurrentHeight);
		parentNewHeight = descHeight + tileCurrentHeight;
		$currentRow.height(parentNewHeight);
		$imageTile.addClass('open');
		$description.css({
			'opacity': '1',
			'z-index': '1'
		});
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
	if ($("#mainMenuPane").css('display') != 'none'){
		showMenu();
	}
	setIndexPageToScreenHeight();
	setVerticalCenter();
	setVerticalCenterDelay();
	closeAllTeam();
});




