<?php
// index.php

// just a quick set up file to serve .twig files keeping the directory structure so I can get working quickly
// note there is no error handling and stuff on here.

require_once '../vendor/twig/twig/lib/Twig/Autoloader.php';
Twig_Autoloader::register();
$loader = new Twig_Loader_Filesystem('../templates');
$twig = new Twig_Environment($loader, array(
                             'debug' => true,
                             ));

$uri = "$_SERVER[REQUEST_URI]";
if ($uri == '/'){
	$uri = 'index';
} else {
	$uri = ltrim($uri,'/');
}
$uri = $uri.'.twig';

echo $twig->render($uri, array(
                   ));