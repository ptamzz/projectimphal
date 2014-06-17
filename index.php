<?php

?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Project Meiphu</title>
    <meta name="author" content="Pritam Pebam" />

	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Ek+Mukta:400,600,700,800,200,300,500|Droid+Sans:400,700" />
	<link rel="stylesheet" href="css/animate.css">
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
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=400012603426316&version=v2.0";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

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
		<a id="home-logo" href="#/home">
			<?php require_once("page/logo.php"); ?>
		</a>
	</div>
	<section id="menu"  class="row">
	  <div class="icon menu4">
	    <span></span>
	    <span></span>
	    <span></span>
	    <span></span>
	  </div>
	</section>

	<div id="nav" class="row">
	 	<div id="racial-slurs" class="nav-item" data-href="racial-slurs">
	 		<div class="nav-text">Racial Slurs</div>
	 	</div>
	 	<div id="ne-food" class="nav-item" data-href="ne-food">
	 		<div class="nav-text">NE Food</div>
	 	</div>
	 	<!-- <div class="nav-item" data-href="lifestyle">LifeStyle</div>
	 	<div class="nav-item" data-href="history">History</div>
	 	<div class="nav-item" data-href="facts">Facts</div> -->
	</div>

	<div id="progress" style="height: 4px; background-color: #f48914; position: relative; z-index: 100;"></div>
	<div id="main" class="row"><!-- main content will come here --></div>
	<div class="characters">
		<div id="kid-one"></div>
		<div id="creepy-guy"></div>
		<img id="college-girl" src="img/chinky/college-girl.png" alt="" style="top: 60px;">
		<div id="arrowkey">
			<img src="img/arrow-keys.png" alt="Arrow Key" style="width: 200px;" />
			<p class="meta-text-14">Click or use the Left or Right Keys to proceed.</p>
		</div>
		<img src="img/line.png" alt="" id="line-one">
	</div>
	

<!-- 	<div id="share">
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
	</div> -->


	<div id="aside" class="row">
		<div class="wrapper more-quizzes">
			<div class="margin">
				<h2 class="main-header">Quiz:</h2>
			</div>
			
			<div class="quiz left">
				<a href="#/quiz/place-the-states">
					<h4 class="quiz-name">Where are the States?</h4>
					<div class="teaser-graphics">
						<img src="img/ne_boundary.png" alt="North East Map" style="width: 90%; margin-top: -38px;">
					</div>
				</a>
			</div>

			<div id="brief" class="left">
				<p>ThinkHuman is a small experiment to help curb racial stereotyping in India.</p>
				<p>
					We believe bringing basic awareness will help understand India's diversity. 
					This shall create responsible citizens of the country and can help learn to accept one another.
				</p>
			</div>
		</div>
	</div>

	<div id="footer" class="row">
		<div class="wrapper">
			<p class="meta-text-white-14">
				<strong>Disclaimer</strong>: ThinkHuman takes utmost care to provide 
				accurate information and data. However, in case of any
				discrepancy, kindly contact us.
			</p>
		</div>
	</div>

</body>
</html>