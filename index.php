
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Think Human Project</title>
    <meta name="author" content="Pritam Pebam" />
    <meta name="description" content="Think Human is a small social awareness experiment aimed to help curb racism in India.">
	<meta name="keywords" content="racism, think, human, pritam, pebam, idc, iit, bombay, industrial, design, centre, center, stereotype, awareness, vigilant" />
	<link rel="image_src" href="http://thinkhuman.in/img/chinky/lullaby-group.png" />
	
	<meta property="og:url" content="http://thinkhuman.in"/>
    <meta property="og:title" content="Think Human"/>
    <meta property="og:description" content="Think Human is a small social awareness experiment aimed to help curb racism in India."/>
    <meta property="og:image" content="http://thinkhuman.in/img/chinky/lullaby-group.png"/>


	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Ek+Mukta:400,600,700,800,200,300,500|Droid+Sans:400,700" />
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/buttons.css">
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet" />


	<script src="js/jquery-2.1.1.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script src="js/jquery.analytics-event-tracking.min.js"></script>
	
	<script src="js/jquery-ui-blind.min.js"></script>
	<script src="js/jquery.easing.1.3.js"></script>
	<script src="js/jquery.scrollTo.min.js"></script>

	<script src="js/isotope.pkgd.min.js"></script>	<!-- For Mazonary layout -->
	<script src="js/masonry-horizontal.js"></script> <!-- Isotope aditional requirement for horizontal layouting -->
	<script src="js/jquery.mousewheel.js"></script>	<!-- Mapping vertical mouse/trackpad scrolling to horizontal scrolling -->

	<script src="js/typed.js"></script>
	<script src="js/custom.js"></script>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-52061107-1', 'thinkhuman.in');
	  ga('send', 'pageview');
	
	</script>

</head>
<body>
	<!-- Facebook Share -->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=400012603426316&version=v2.0";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	<!-- Facebook Share ends -->

	<div id="welcome-msg" class="home" style="height: 800px;">
		<div class="skip-intro track" data-category="actions" data-action="skip-intro" data-label="skip-intro-link" style="z-index: 100;">Skip Intro</div>
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
		<a id="home-logo" href="http://localhost:8888/projectimphal/" class="track" data-category="actions" data-action="goto-home" data-label="home-button">
			<?php require_once("page/logo.php"); ?>
		</a>

		<a id="fback" href="#/feedback" class="track" data-category="feedback" data-action="sandbar-feedback" data-label="feedback-link">Feedback</a>

		<div id="share">
			<div id="fb-main" class="fb-share-button track" data-category="share" data-action="fb-share" data-label="fb-sandbar" data-type="button"></div>
			<a  id="twitter-main" href="https://twitter.com/share" class="twitter-share-button track" data-category="share" data-action="twitter-share" data-label="twitter-sandbar" data-via="ptamzz" data-hashtags="north-east">Tweet</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			
			<!-- Place this tag where you want the share button to render. -->
			<div id="g-plus-main" class="g-plus track" data-category="share" data-action="g-plus-share" data-label="g-plus-sandbar" data-action="share" data-annotation="none" ></div>

			<!-- Place this tag after the last share tag. -->
			<script type="text/javascript">
			  (function() {
			    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			    po.src = 'https://apis.google.com/js/platform.js';
			    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			  })();
			</script>
		</div>

	</div>

	<div id="nav" class="row">
	 	<div id="racial-slurs" class="nav-item track" data-category="navigation" data-action="goto-racial-slurs" data-label="navigation" data-href="racial-slurs">
	 		<div class="nav-text">Racial Slurs</div>
	 	</div>
	 	<div id="ne-food" class="nav-item track" data-category="navigation" data-action="goto-racial-slurs" data-label="navigation" data-href="ne-food">
	 		<div class="nav-text">NE Food</div>
	 	</div>

	 	<div id="ne-tour" class="nav-item track" data-category="navigation" data-action="goto-ne-tour" data-label="navigation" data-href="the-north-east-tour">
	 		<div class="nav-text">The NE Tour</div>
	 	</div>
	</div>

	<div id="progress" style="height: 4px; background-color: #f48914; position: relative; z-index: 100;"></div>
	<div id="main" class="row" style="height: 600px;"><!-- main content will come here --></div>
	<div id="arrowkey">			
		<div id="arrow-key-btn">
			<div id="left-arrow" class="arrow-keys track" data-category="progress" data-action="previous-slide" data-label="left" data-value="0"></div>
			<div id="right-arrow" class="arrow-keys track" data-category="progress" data-action="next-slide" data-label="right" data-value="0"></div>
			<div id="up-arrow" class="arrow-keys"></div>
			<div id="down-arrow" class="arrow-keys"></div>
		</div>
		
		<p class="meta-text-14" style="width: 155px; top: 15px; position: relative;">Click or use the Left or Right Keys to proceed.</p>
	
	</div>

	<div class="characters">
		<div id="kid-one"></div>
		<div id="creepy-guy"></div>
		<img id="college-girl" src="img/chinky/college-girl.png" alt="" style="top: 88px;">
		<img src="img/line.png" alt="" id="line-one" style="width: 70px;">
	</div>

	<div id="aside" class="row">
		<div class="wrapper more-quizzes">

			<div class="quiz left">
				<div class="margin">
					<h2 class="main-header">Channels:</h2>
				</div>
			
				<a href="#/racial-slurs">
					<h4 class="quiz-name">Racial slurs in India</h4>
					<div class="teaser-graphics">
						<img src="img/slurs.png" alt="racial slurs" style="width: 100%; margin-top: -38px;">
					</div>
				</a>
			</div>

			<div class="quiz left">
				<div class="margin">
					<h2 class="main-header" style="opacity: 0">.</h2>
				</div>
				<a href="#/ne-food">
					<h4 class="quiz-name">North East Cuisine</h4>
					<div class="teaser-graphics">
						<img src="img/food/soibum_yendem_eromba.jpg" alt="North East Cuisine" style="width: 100%; margin-top: -38px;">
					</div>
				</a>
			</div>

			<div id="brief" class="quiz left" style="width: 500px; margin-left: 50px;">
				<h4 class="main-header">Think Human</h4>
				<p>Think Human is a small social awareness experiment.</p>
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