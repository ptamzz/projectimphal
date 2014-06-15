<?php

?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Project Meiphu</title>
    <meta name="author" content="Pritam Pebam" />

	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Ek+Mukta:400,600,700,800,200,300,500|Droid+Sans:400,700" />
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet" />


	<script src="js/jquery-2.1.1.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script src="js/jquery-ui-blind.min.js"></script>
	<script src="js/jquery.easing.1.3.js"></script>
	<script src="js/jquery.scrollTo.min.js"></script>

	<script src="js/isotope.pkgd.min.js"></script>	<!-- For Mazonary layout -->
	<script src="js/masonry-horizontal.js"></script> <!-- Isotope aditional requirement for horizontal layouting -->
	<script src="js/jquery.mousewheel.js"></script>	<!-- Mapping vertical mouse/trackpad scrolling to horizontal scrolling -->


	<script src="js/typed.js"></script>
	<script src="js/custom.js"></script>

	
	<style>
		
	</style>
    
</head>
<body>
	<!-- Facebook Share -->
	<div id="fb-root"></div>
	<script>
	/* (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "http://connect.facebook.net/en_US/sdk.js";
	  ////connect.facebook.net/en_US/sdk.js#xfbml=1&appId=400012603426316&version=v2.0
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	*/
	</script>
	<!-- Facebook Share ends -->

	<div id="welcome-msg" class="home" style="height: 800px;">
		<div class="skip-intro">Skip Intro</div>
		<div class="wrapper">
			<div class="parawrap">
				<p id="firstline"></p>
				<p id="secondline"></p>
				<p id="thirdline">
					<span class="curb"></span> <span class="round" style="display: none;">&#8594;</span>
				</p>
			</div>
		</div>
	</div>

	<div id="sandbar" class="row">
		<a href="#/home"><h1 id="home-logo"><?php require_once("page/logo.php"); ?></h1></a>
		<svg version="1.1" id="menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 width="30.673px" height="27.399px" viewBox="0 0 30.673 27.399" enable-background="new 0 0 30.673 27.399" xml:space="preserve">
		<g>
			<rect x="1" y="0.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="11" y="0.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="21" y="0.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="1" y="9.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="11" y="9.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="21" y="9.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="1" y="18.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="11" y="18.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
			<rect x="21" y="18.628" fill-rule="evenodd" clip-rule="evenodd" fill="#313132" width="9" height="8"/>
		</g>
		</svg>

	</div>
	<div id="nav" class="row">
	 	<div class="nav-item" data-href="racial-slurs">Racial Slurs</div>
	 	<div class="nav-item" data-href="ne-food">NE Food</div>
	 	<div class="nav-item" data-href="lifestyle">LifeStyle</div>
	 	<div class="nav-item" data-href="history">History</div>
	 	<div class="nav-item" data-href="facts">Facts</div>
	</div>

	<div id="main" class="row"><!-- main content will come here --></div>
	<div class="characters">
		<div id="kid-one"></div>
		<div id="creepy-guy"></div>
		<div id="arrowkey">
			<img src="img/arrow-keys.png" alt="Arrow Key" style="width: 200px;" />
			<p class="meta-text-14">Click or use the Left or Right Keys to proceed.</p>
		</div>
		<svg version="1.1" id="line-one" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 width="34.896px" height="26.216px" viewBox="0 0 34.896 26.216" enable-background="new 0 0 34.896 26.216" xml:space="preserve">
		<polyline fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#2889C3" stroke-miterlimit="10" points="18.994,1.171 
			1.994,24.171 33.619,13.796 "/>
		</svg>
	</div>
	<!-- <div id="share">
		<div class="wrapper">
			<h1 class="share-title">Share the result</h1>
			<div class="display-results">
				hehaha
			</div>
			<div class="result-message">
				yellopw
			</div>
		</div>
		<div class="fb-share-button" data-href="http://localhost:8888/projectimphal/#/place-the-states" data-type="button"></div>
	</div>
-->
	<div id="aside" class="row">
		<div class="wrapper more-quizzes">
			<div class="margin">
				<h2 class="main-header">More Quizzes</h2>
			</div>

			<div class="quiz left">
				<h4 class="quiz-name">Are you a responsible Citizen?</h4>
				<div class="teaser-graphics"> XYXYX</div>
			</div>
			<div class="quiz left">
				<a href="#/quiz/place-the-states">
					<h4 class="quiz-name">Place the States?</h4>
					<div class="teaser-graphics"></div>
				</a>
			</div>
			<div class="quiz left">
				<h4 class="quiz-name">How informed are you on racially-offensive terms?</h4>
				<div class="teaser-graphics"> XYXYX</div>
			</div>
		</div>
	</div>

	<div id="footer" class="row">
		Footer
	</div>

</body>
</html>