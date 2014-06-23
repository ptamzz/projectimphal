/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var ans, numTimes, len, peg = 0, count = 0, url = 'home', time, numSteps = 0, stepWidth = 0, hideShowSpeed=700,
	race = [], winHeight, winWidth, mainHeight, timerObject, count = 1, timerSet = false, slideState = true
	current = "home", step = 0, menuUp = false, quiz = false, numSlurs = 0, tourCount = 1;
$(function() {

	//Get window Height & Width + set DOM height & widths
	dom = $('body, html');
	winHeight = $(window).height();
	winWidth = $(window).width();
	mainHeight = winHeight - 200;
	homeWidth = winWidth-300;

	setMainDimension();

	//Handle Basic URL hash-bang
	handleURL(true);													//handles URL on first time load
	$(window).bind('hashchange', function() { 
		handleURL(false);
		if($("#welcome-msg").length){
			$("#welcome-msg").hide();
		}
	});		//Handles URL on hashchange


	//Skip Intro
	$(document).on("click", ".skip-intro", function() { hideWCmsg(); });

	//Show/Hide Menu
	$(document).on("click", ".icon", function() { 
		if(!menuUp) { 
			$(this).addClass("open");
			showMenu(); 
		} else { 
			$(this).removeClass("open");
			hideMenu(); 
		}
	});

	//Load categories
	$(document).on("click", ".nav-item", function() { 
		var href= $(this).data("href");
		hideMenu();
		window.location.hash = '#/' + href;
		current = href;
		step = 0;
	});

	//Load categories
	$(document).on("click", ".arrow-keys", function() { 
		var id = $(this).attr("id");

		if(id == "left-arrow"){
			handleArrowKeys(37);	//LEFT arrow
		} else if(id == "right-arrow"){
			handleArrowKeys(39);	//Right arrow
		}
	});

	//Set Page & Step Count on Nav Clicks
	$(document).on("click", ".basic li", function() {  current = $(this).data('href'); });

	//Capture LEFT/RIGHT arrow press
	$('body').keyup(function(e) {
		handleArrowKeys(e.keyCode);
	});

	$(document).one("mouseover", "#states", function() {
		//Set timer is NOT already set
		if(!timerSet){
		  timer();
		  timerSet = true;
		}
	});

	$(document).on("click", ".result-action .score", function() {
		loadItem("path/home.php");
	});

	//Tour proceed button
	$(document).on("click", ".start-tour", function() {

		var interval;

		//Hide all content box
		$(".tour-states>div").fadeOut();
		$(".tour").fadeOut();

		$(".tour-wcmsg").fadeOut();

		$("#tour-car").show();
		$("#tour-car").addClass("animation-jelly");
		$(".tour").removeClass("animation-jelly");

		var e = $(this);

		var route = e.data("route");	//Get Route
		e.fadeOut();
		e.removeClass("hoverboard-down");


		//Tracking navigation progress
		if($(this).data("value") > 10){
			$(this).data("value", 1);
			tourCount = 1;
		} else {
			$(this).data("value", tourCount++);
		}


		//Update ganalytics label
		$(this).data("label", route);


		console.log("Route Print Out" + route);

		if(route == "mumbai-siliguri") {
			$("#tour-map").removeClass("unscaled").addClass("scaled");
		}
		$("#tour-map").addClass(route);	//Animate Route


		//Set event listerner to identify when the animation ends
		$(document).on("animationend webkitAnimationEnd oAnimationEnd", "#tour-map", function() {
			
			console.log("Just Inside: " + route);

			//Reset Route
			if(route == "mumbai-siliguri") {
				//e.removeData()
				e.data("route", "siliguri-gangtok");
				e.html("Visit Sikkim");

			} else if(route == "siliguri-gangtok"){

				console.log("S-G: " + route);
			
				e.data("route", "gangtok-guwahati");
				e.html("Click to visit Assam");

				//Content bubble animation
				$(".content-sikkim").show();
				$(".content-sikkim .content-one").show();
				$(".content-sikkim .content-one").addClass("animation-jelly");

				interval = setInterval(function(){
					$(".content-sikkim .content-two").show();
					$(".content-sikkim .content-two").addClass("animation-jelly");

					clearInterval(interval);
				}, 500);
			} else if(route == "gangtok-guwahati"){
				console.log("G-G: " + route);

				e.data("route", "guwahati-shillong");
				e.html("Proceed to Meghalaya");

				$(".content-sikkim").hide();

				//Content bubble animation
				$(".content-assam").show();
				$(".content-assam .content-one").show();
				$(".content-assam .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-assam .content-two").show();
					$(".content-assam .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);

			} else if(route == "guwahati-shillong"){
				e.data("route", "shillong-itanagar");
				e.html("Visit Arunachal Pradesh");

				$(".content-sikkim").hide();
				$(".content-assam").hide();


				//Content bubble animation
				$(".content-meghalaya").show();
				$(".content-meghalaya .content-one").show();
				$(".content-meghalaya .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-meghalaya .content-two").show();
					$(".content-meghalaya .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);
			} else if(route == "shillong-itanagar"){
				e.data("route", "itanagar-kohima");
				e.html("Visit Nagaland");

				$(".content-sikkim").hide();
				$(".content-assam").hide();
				$(".content-meghalaya").hide();

				//Content bubble animation
				$(".content-arunachal").show();
				$(".content-arunachal .content-one").show();
				$(".content-arunachal .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-arunachal .content-two").show();
					$(".content-arunachal .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);
			} else if(route == "itanagar-kohima"){
				e.data("route", "kohima-imphal");
				e.html("Click to visit Manipur");

				$(".content-sikkim").hide();
				$(".content-assam").hide();
				$(".content-meghalaya").hide();
				$(".content-arunachal").hide();

				//Content bubble animation
				$(".content-nagaland").show();
				$(".content-nagaland .content-one").show();
				$(".content-nagaland .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-nagaland .content-two").show();
					$(".content-nagaland .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);
			} else if(route == "kohima-imphal"){
				e.data("route", "imphal-aizawl");
				e.html("Click and travel to Mizoram");

				$(".content-sikkim").hide();
				$(".content-assam").hide();
				$(".content-meghalaya").hide();
				$(".content-arunachal").hide();
				$(".content-nagaland").hide();


				//Content bubble animation
				$(".content-manipur").show();
				$(".content-manipur .content-one").show();
				$(".content-manipur .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-manipur .content-two").show();
					$(".content-manipur .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);
			} else if(route == "imphal-aizawl"){
				e.data("route", "aizawl-agartala");
				e.html("Proceed to our final destination, Tripura");

				$(".content-sikkim").hide();
				$(".content-assam").hide();
				$(".content-meghalaya").hide();
				$(".content-arunachal").hide();
				$(".content-nagaland").hide();
				$(".content-manipur").hide();
				
				
				//Content bubble animation
				$(".content-mizoram").show();
				$(".content-mizoram .content-one").show();
				$(".content-mizoram .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-mizoram .content-two").show();
					$(".content-mizoram .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);
			} else if(route == "aizawl-agartala"){
				//tour Ends
				e.data("route", null);

				$(".content-sikkim").hide();
				$(".content-assam").hide();
				$(".content-meghalaya").hide();
				$(".content-arunachal").hide();
				$(".content-nagaland").hide();
				$(".content-manipur").hide();
				$(".content-mizoram").hide();

				//Content bubble animation
				$(".content-tripura").show();
				$(".content-tripura .content-one").show();
				$(".content-tripura .content-one").addClass("animation-jelly");
				interval = setInterval(function(){
					$(".content-tripura .content-two").show();
					$(".content-tripura .content-two").addClass("animation-jelly");
					clearInterval(interval);
				}, 500);
			}

			if(route != "aizawl-agartala") {
				e.addClass("hoverboard-down");
				e.fadeIn();
			}

			if (route == "aizawl-agartala") {
				e.data("route", "END");
				e.html("End Tour");
				e.fadeIn();
			}

			// console.log("About to Appear");
			// $(".start-tour").fadeIn();
		});

			if (route == "END") {
				console.log("Come Baby");
				$(".tour-feedback").fadeIn();
			}

	});

	//Load categories
	$(document).on("click", ".feedback", function() { 
		$(this).parents(".feedback-box").fadeOut("fast", function(){
			$(".feedback-thanks").fadeIn();
		});
	});

	//Load categories
	$(document).on("click", ".close", function() { 
		$(".tour-feedback").hide();
	});

	//Google analytics Event tracking initialization
	$('body').analyticsEventTracking();


}); // jQuery $(funtion() ends

function AnimationListener(){
	console.log("Animation Ends");
}

function handleArrowKeys(e){
	if (e == 37) { 						// LEFT arrow
		step--;
		decreaseStep(step);

		$("#left-arrow").data("ga-value", step);
	} else if(e == 39) { 				// RIGHT arrow // 27 = esc
		step++;
		increaseStep(step);

		$("#right-arrow").data("ga-value", step);
	}

	step = (step < 0 ? 0 : step);	//Don't let it pass left the first slide

	if(step <= numSteps) {
		//Show ProgressBar
		$("#progress").animate({ "width" : step*stepWidth });
	}
}

function hideArrowKeys(){
	//Hide arrow keys
	$("#arrowkey").fadeOut();
	$(".arrow-key-nudge").fadeOut();
}

function showArrowKeys(){
	if(current != "the-north-east-tour"){
		//Show arrow keys
		$("#arrowkey").fadeIn();
		$(".arrow-key-nudge").fadeIn();
	}
	
}

function slideLeft(){

	var e = $("#main .inview");

	if (e.data("slidestate")){
		$("#main").scrollTo(e.prev(), 500);
		e.removeClass('inview');
		e.prev().addClass('inview');
	} 
	
}

function slideRight(){

	var e = $("#main .inview");

	if (e.data("slidestate")){
		$("#main").scrollTo(e.next(), 500);
		e.removeClass('inview');
		e.next().addClass('inview');
	}
}

function increaseStep(step){

	//What to do with each keyPress
	switch(step){
		case 0:

			if(current == "home"){
				
			}
	       
	        break;
	    case 1:

			if(current == "home"){
				animateEachOut($("#first-card .one"), $("#line-one"));
				animateEachIn($("#first-card .two"), $("#line-one"));
				showMenu();

				$(".arrow-key-nudge").hide();
			} else if(current == "racial-slurs"){
				slideRight();
				$("#line-one").animate({ 'left': 240, 'opacity': 0 }, 200, 'swing');
				animateEachIn($("#second-card .one"), $("#line-one"));

				$("#kid-one").css({ 'background-position' : 0 });

			} else if(current == "ne-food"){
				slideRight();
				$("#line-one").hide();

				animateEachIn($("#second-card .one"), $("#line-one"));
				$("#ngari").show();
				$("#ngari").animate({ "left": 0 }, 800, "swing");
			} 
	       
	        break;

	    case 2:

			if(current == "home"){
				//Goto Racial Slurs Page
				window.location.hash = '#/racial-slurs';

			} else if (current=="racial-slurs"){
				slideRight();
				$("#line-one").hide();

				$("#creepy-guy").fadeIn();
				$("#line-two").fadeIn();

				$("#third-card .one").fadeIn();
				$("#third-card .one").css({ 'opacity' : 1 });

				$("#kid-one").hide();
				$("#college-girl").fadeIn();

				hideAndShowSlurs();



				$("#main").css({'background-color' : "#fcf297"});
			} else if(current == "ne-food"){
				animateEachOut($("#second-card .one"), $("#line-one"));
				animateEachIn($("#second-card .two"), $("#line-one"));
				$("#ngari").css({ 'background-position' : '-500px 90%' });
				$("#hawaijar").show();
				$("#hawaijar").animate({ "left": "35%" }, 800, "swing");
			} 
	       
	        break;

	    case 3:

	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#third-card>.one>p").hide();
				$("#creepy-guy").hide();
				$("#line-two").hide();
				$("#main").css({ "background" : "none" });
				$("#line-one").show();

				animateEachOut($("#third-card .one"), $("#line-one"));
				$("#kid-one").fadeIn();

				$(".middle-container").hide();
				$("#college-girl").hide();
				
				animateEachIn($("#third-card .two"), $("#line-one"));
				$("#kid-one").css({ 'background-position' : 0 });
			} else if(current == "ne-food"){
				animateEachOut($("#second-card .two"), $("#line-one"));
				animateEachIn($("#second-card .three"), $("#line-one"));

				$("#soibum").show();
				$("#soibum").animate({ "left": "70%" }, 800, "swing");
			} 
	       
	        break;
	    case 4:
	       if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").css({ 'background-position' : "-730px 55px", 'width' : 240 });
				animateEachOut($("#third-card .two"), $("#line-one"));

				$("#creepy-guy").fadeIn();
				$("#creepy-guy").css({
					'background-position' : '-855px -35px',
					'width' : 265,
					'bottom' : 0,
					'top': 'auto',
					'right' : 305,
					'height' : 475,
					'background-size' : 1400
				});

				$(".middle-container").fadeIn();

				animateEachIn($("#third-card .three"), $("#line-one"));

				$("#bar").show();
				$(".middle-container").css({ 'top' : 0 });


				$("#bar").removeClass("pull-bar").addClass("animate-bar");
			} else if(current == "ne-food"){
				animateEachOut($("#second-card .three"), $("#line-one"));
				animateEachIn($("#second-card .four"), $("#line-one"));
			} 

	        break;
	    case 5:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#bar").removeClass("animate-bar").addClass("pull-bar");
				$("#bar").hide();
				$("#creepy-guy").hide();
				animateEachOut($("#third-card .three"), $("#line-one"));
				$(".middle-container").css({ 'top' : 111 });

				slideRight();
				animateEachIn($("#fourth-card .one"), $("#line-one"));
			}  else if(current == "ne-food"){
				$("#ngari").hide();
				$("#hawaijar").hide();
				$("#soibum").hide();

				$("#line-one").fadeIn();

				slideRight();
				animateEachIn($("#third-card .one"), $("#line-one"));
			} 
	       
	        break;
	    case 6:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				slideRight();
				$(".characters").hide();

				animateEachIn($("#fifth-card .one"), $("#line-one"));
				
				$("#kid-one").css({ 'background-position' : "-734px" });
				showMenu();
			} else if(current == "ne-food"){
				$("#line-one").hide();
				slideRight();
				animateEachIn($("#fourth-card .one"), $("#line-one"));
				$("#fourth-card .middle-container").fadeIn();
				$("#eromba").show();
				$("#eromba").animate({ "left": 0 }, 800, "swing");
			} 
	       
	        break;
	    case 7:
	    	if(current == "racial-slurs"){
	    		//Goto ne-food Page
				window.location.hash = '#/ne-food';
	    	} else if(current == "ne-food"){
	    		animateEachOut($("#fourth-card .one"), $("#line-one"));
	    		animateEachIn($("#fourth-card .two"), $("#line-one"));
				$("#pork-bamboo-shoot").show();
				$("#pork-bamboo-shoot").animate({ "left": "50%" }, 800, "swing");
			} 
	       
	        break;
	    case 8:
	    	if(current == "ne-food"){
	    		$(".characters").hide();

	    		$("#line-one").fadeIn();
	    		$("#fourth-card .middle-container").hide();
	    		$("#eromba").hide();
	    		$("#pork-bamboo-shoot").hide();

				slideRight();
				animateEachIn($("#fifth-card .one"), $("#line-one"));
				$("#kid-one").css({ 'background-position' : '-735px' });

				showMenu();
			} 
	       
	        break;
	    case 9:
	    	if(current == "ne-food"){
	    		//Goto ne-food Page
				window.location.hash = '#/the-north-east-tour';
			} 
	    	
	       
	        break;
	    default:
	    	//Default step

	}
}

function decreaseStep(step){
	//What to do with each keyPress
	switch(step){
	    case 0:

			if(current == "home"){
				$(".arrow-key-nudge").fadeIn();
				hideMenu();
				animateEachOut($("#first-card .two"), $("#line-one"));
				animateEachIn($("#first-card .one"), $("#line-one"));

			} else if(current == "racial-slurs"){
				$("#kid-one").css({ 'background-position' : 0 });	//bg-position changes
				animateEachOut($("#second-card .one"), $("#line-one"));
				$("#line-one").animate({ 'left': 270, 'opacity': 1 }, 700, 'swing');
				
				slideLeft();

			} else if(current == "ne-food"){
				$("#ngari").animate({ "left": "100%" }, 800, "swing");
				$("#ngari").hide();
				
				//$("#second-card .one").animate({ "left": 800, 'opacity': 0 }, 200, "swing");
				$("#line-one").fadeIn();
				$("#second-card .one").show();
				animateEachIn($("#second-card .one"), $("#line-one"));
				//animateEachIn($("#second-card .two"), $("#line-one"));

				slideLeft();
			} 
	       
	        break;

	    case 1:

			if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#main").css({'background' : "none"});
				$("#college-girl").hide();
				$("#kid-one").fadeIn();
				$("#third-card .one").css({ 'opacity' : 0 });
				$("#third-card .one").hide();
				$("#line-two").hide();
				$("#creepy-guy").hide();
				$("#line-one").fadeIn();
				
				slideLeft();
				$("#third-card>.one>p").hide();
			} else if(current == "ne-food"){
				$("#hawaijar").animate({ "left": "100%" }, 800, "swing");
				$("#hawaijar").hide();
				$("#ngari").css({ 'background-position' : '50% 90%' });

				animateEachIn($("#second-card .one"), $("#line-one"));
				animateEachOut($("#second-card .two"), $("#line-one"));
				
			} 
	       
	        break;

	    case 2:

	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#kid-one").css({ 'background-position' : 0 });
				$("#college-girl").fadeIn();
				animateEachOut($("#third-card .two"), $("#line-one"));
				$(".middle-container").fadeIn();
				$("#kid-one").hide();
				//animateEachIn($("#third-card .one"), $("#line-one"));
				$("#third-card .one").show();
				$("#third-card .one").css({ 'opacity' : 1 });  //Not working
				$("#line-one").hide();
				$("#main").css({ "background-color" : "#fcf297" });
				$("#line-two").fadeIn();
				$("#creepy-guy").fadeIn();


				hideAndShowSlurs();


			} else if(current == "ne-food"){
				$("#soibum").animate({ "left": "100%" }, 800, "swing");
				$("#soibum").hide();

				animateEachIn($("#second-card .two"), $("#line-one"));
				animateEachOut($("#second-card .three"), $("#line-one"));
			} 
	       
	        break;
	    case 3:
	       if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#bar").removeClass("animate-bar").addClass("pull-bar");
				$("#bar").hide();
				animateEachOut($("#third-card .three"), $("#line-one"));
				$(".middle-container").hide();
				$("#creepy-guy").hide();
				animateEachIn($("#third-card .two"), $("#line-one"));
				$(".middle-container").css({ 'top' : 111 });

				$("#creepy-guy").css({ 'background-position' : "0", 'width' : 240 });

				$("#creepy-guy").css({
					'background-position' : '0',
					'width' : 189,
					'bottom' : 'auto',
					'top': 60,
					'right' : 310,
					'height' : 362,
					'background-size' : 900
				});

			} else if(current == "ne-food"){
				
				animateEachIn($("#second-card .three"), $("#line-one"));
				animateEachOut($("#second-card .four"), $("#line-one"));
			} 

	        break;
	    case 4:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				animateEachOut($("#fourth-card .one"), $("#line-one"));
				slideLeft();
				animateEachIn($("#third-card .three"), $("#line-one"));
				$("#creepy-guy").fadeIn();
				$("#bar").fadeIn();
				$("#bar").removeClass("pull-bar").addClass("animate-bar");
				$(".middle-container").css({ 'top' : 111 });

			}  else if(current == "ne-food"){
				animateEachOut($("#third-card .one"), $("#line-one"));
				slideLeft();
				$("#line-one").hide();
				
				$("#ngari").fadeIn();
				$("#hawaijar").fadeIn();
				$("#soibum").fadeIn();
			} 
	       
	        break;
	    case 5:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				hideMenu();
				$("#kid-one").css({ 'background-position' : "0" });
				animateEachOut($("#fifth-card .one"), $("#line-one"));

				slideLeft();
			} else if(current == "ne-food"){
				$("#eromba").animate({ "left": "100%" }, 800, "swing");
				$("#eromba").hide();
				$("#fourth-card .middle-container").hide();
				animateEachOut($("#fourth-card .one"), $("#line-one"));
				slideLeft();

				$("#line-one").fadeIn();
			} 
	       
	        break;
	    case 6:
	    	if(current == "ne-food"){
	    		$("#pork-bamboo-shoot").animate({ "left": "100%" }, 800, "swing");
	    		$("#pork-bamboo-shoot").hide();
				
	    		animateEachOut($("#fourth-card .two"), $("#line-one"));
	    		animateEachIn($("#fourth-card .one"), $("#line-one"));	
			} 
	       
	        break;
	    case 7:
	    	if(current == "ne-food"){
	    		hideMenu();

	    		$("#kid-one").css({ 'background-position' : 0 });
	    		animateEachOut($("#fifth-card .one"), $("#line-one"));
	    		slideLeft();

	    		$("#line-one").fadeOut();
	    		$("#fourth-card .middle-container").fadeIn();
	    		$("#eromba").fadeIn();
	    		$("#pork-bamboo-shoot").fadeIn();		
			} 
	       
	        break;
	    case 8:
	    	
	       
	        break;
	    default:
	    	//Default step

	}
}

function hideAndShowSlurs(){


	$("#third-card>.one>span:nth-child(1)").animate({
		'opacity' : 1
	}, hideShowSpeed, function(){
		$("#third-card>.one>span:nth-child(1)").animate({ 'opacity' : 0 });
		$("#third-card>.one>span:nth-child(2)").animate({
			'opacity' : 1
		}, hideShowSpeed, function(){
			$("#third-card>.one>span:nth-child(2)").animate({ 'opacity' : 0 });
			$("#third-card>.one>span:nth-child(3)").animate({
				'opacity' : 1
			}, hideShowSpeed, function(){
				$("#third-card>.one>span:nth-child(3)").animate({ 'opacity' : 0 });
				$("#third-card>.one>span:nth-child(4)").animate({
					'opacity' : 1
				}, hideShowSpeed, function(){
					$("#third-card>.one>span:nth-child(4)").animate({ 'opacity' : 0 });
					$("#third-card>.one>span:nth-child(5)").animate({
						'opacity' : 1
					}, hideShowSpeed, function(){
						$("#third-card>.one>span:nth-child(5)").animate({ 'opacity' : 0 });
						$("#third-card>.one>span:nth-child(6)").animate({
							'opacity' : 1
						}, hideShowSpeed, function(){
							$("#third-card>.one>span:nth-child(6)").animate({ 'opacity' : 0 });
							$("#third-card>.one>p").fadeIn();
						});
					});
				});
			});
		});
	});

}

function handleURL(firstTime){
	resetDOM();	//Reset DOM javascript manipulations
	hideMenu();
	$(document).scrollTo(0);
	//$("#arrowkey").hide();
	hideArrowKeys()

	hash = (window.location.hash == '') ? '#/home' : window.location.hash;

	url = hash.split("/"); //Get window hash value and split it on "/"
	path = (url[1] == "quiz" ? "page/quizzes/" + url[2] : "page/" + url[1]);	//If-Else quiz
	current = (url[1] == "quiz" ? url[2] : url[1]);	//For Current page
	quiz = (url[1] == "quiz" ? true : false );	//To check whether it's a quiz or normal page

	step = 0; 

	//If Home, show welcome message
	if(url[1] == 'home') {
		if(firstTime){
			$("#welcome-msg").css({ 'height' : winHeight, 'display' : 'block' });
			getTyped();
		}
		loadItem("page/home.php");
	} else {
		//Load specific page
		loadItem(path+".php");
	}

	/** Setting Share URLs **/
	var shareURL = "http://thinkhuman.in/" + hash;


	$("#fb-main").data("ga-label", shareURL );
	$("#fb-main").data("href", shareURL );

	$("#twitter-main").data("ga-label", shareURL );
	$("#twitter-main").data("url", shareURL );

	$("#g-plus-main").data("ga-label", shareURL );
	$("#g-plus-main").data("href", shareURL );
	
}


function loadItem(path){


	$.get(path, function (html) {
		$("#main").html(html);

		if(path == "page/quizzes/place-the-states.php"){ initiateDragDrop(); }
			else if (path == "page/home.php") {  

			} else {
				showFirstMsg(); //Flyin first card message
			}

		if(!quiz && current != "home"){

			$('.characters').css({ 'height' : mainHeight, 'width' : winWidth });
			$('.characters').fadeIn();
			if(current != "ne-food"){
				$('.middle-container').css({ 
					'height' : mainHeight/2, 
					'width' : (winWidth/2) + 200 , 
					'left' : '50%', 
					'margin-left' : (-1*(winWidth+200))/4 
				});
			}

			showArrowKeys(); //Show arrow LEFT & RIGHT control	
		}


		if (current == "ne-food"){
			$(".food-pic").css({ 'width' : winWidth, 'height' : mainHeight+21, 'left' : winWidth });
		} else if ( current == "racial-slurs"){
			$("#bar").css({ 'height' : mainHeight+21 });
		} 


		if (current == "feedback" || current == "the-north-east-tour") {
			$('.characters').hide();
			$('#arrowkey').hide();
		}
		

		var $container = $('.isotope');
		$container.css({ 'height' : mainHeight });
		$('.each-page').css({ 'width' : winWidth, 'height' : mainHeight-80 });

		// init Isotope
		$container.isotope({
		  // options
		  itemSelector: '.each-page',
		  layoutMode: 'masonryHorizontal',
		  masonryHorizontal: {
			  rowHeight: 100
			}
		});

		$("#main").scrollTo(0);	//scroll to extreme left while load

	
		$("#progress").css({ 'width' : 0 });
		//Identify number of steps 
		if(current =="home"){
			numSteps = 0;
		} else if(current == "racial-slurs"){
			numSteps = 6;
		} else if(current == "ne-food"){
			numSteps = 8;
		}
		if(current != "home"){
			stepWidth = winWidth/numSteps;
		}

		//Initializing Google analytics for ajax DOM
		$('body').analyticsEventTracking();
	})
		 .fail(function() {
			$.get("page/error.php", function (html) {
				$("#main").html(html);
			})
		});




}

function timer(){
	
	time = 0, m = 0;
	timerObject = setInterval(function(){myTimer()}, 1000);

	function myTimer() {
		$(".timer").html(time);
	    time++;
	}
}



//Quiz: Place the State
function initiateDragDrop(){
	var realCount= 1;
	//Quiz: Place the State 
	$( ".drag").draggable({
		revert: "invalid",
		start: function() {

			e = $(this);
			item = e.attr("id");

			$(".q-result .steps").html(count);
		},
		stop: function() {
			count++;
		}
	});

	$( ".droppable" ).droppable({
		drop: function( event, ui ) {
			curItem = $(this).data("state");
			if(item == curItem){ dropSnap(); }
	
			if(realCount == 8){
				clearInterval(timerObject);	//Clear timer
				timerSet = false;
				
				//Display Result values
				$("#second-card .timer-div .timer-result").html(time);
				$("#second-card .steps-div .timer-result").html(count);

				slideRight();
			}
			realCount++;
		}
	});

	$("#states").css({ 'height': mainHeight-100 });
}

//Quiz: Place the States
function dropSnap(){
	//Animate to drop area
	switch(item) {
	    case "arunachal":
	        e.animate({
				'left' : '-435px', 
				'top' : '53px',
				'width' : '380px',
				'height' : '205px'
			}, 200, 'swing');

	        break;
	    case "assam":
	        e.animate({
				'left': '-552px',
				'width': '477px',
				'top': '151px',
				'height': '255px'
			}, 200, 'swing');

	        break;

	    case "manipur":
	        e.animate({
				'left': '-354px',
				'top': '306px',
				'width': '147px',
				'height': '115px'
			}, 200, 'swing');

	        break;

	    case "meghalaya":
	        e.animate({
				'left': '-543px',
				'top': '276px',
				'width': '201px'
			}, 200, 'swing');

	        break;

	    case "tripura":
	        e.animate({
				'left': '-469px',
				'top': '377px',
				'height': '126px',
			}, 200, 'swing');

	        break;

	    case "mizoram":
	        e.animate({
					'left': '-397px',
					'top': '380px',
				'height': '200px',
			}, 200, 'swing');

	        break;

	    case "nagaland":
	        e.animate({
				'left': '-336px',
				'top': '244px',
				'width': '142px'
			}, 200, 'swing');

	        break;

	    case "sikkim":
	        e.animate({
				'left': '-651px',
				'top': '144px',
			}, 200, 'swing');

	        break;

	    default:
	        //default code block
	} //Switch Case Ends
}

//Quiz: Place the State ENDS


//Get Typewriter Effect
function getTyped(){
	 $("#firstline").typed({
        strings: ["Most of the racial stereotype based crimes in India are caused out of "],
        typeSpeed: 5,
        callback: function(){
        	$("#secondline").typed({
		        strings: ["^50 Ignorance"],
		        typeSpeed: 5,
		        callback: function(){
		        	
		        	$("#thirdline .curb").typed({
				        strings: ["^200 How can you help change it?"],
				        typeSpeed: 5,
				        callback: function(){
				        	var intervalHandle = setInterval(function(){
				        		hideWCmsg();
				        		clearInterval(intervalHandle);
				        	},2000);	
				        }
			        });
		        }
	        });	// Second callBack ends

        } // First CallBack ends
    });
}

function hideWCmsg(){
	$("#welcome-msg").hide('blind', { 'direction' : 'vertical' }, 500, function(){

		//If arrows have not been used as yet
		$('.characters').css({ 'height' : mainHeight, 'width' : winWidth });
		$('#menu').fadeIn();

		if(step <= 0){ showFirstMsg(); }
		$('.characters').fadeIn("slow", function(){
			showArrowKeys();
		});
	});
}

function showFirstMsg(){
	
	animateEachIn($("#first-card .one"), $('#line-one'));
}

//Count occurence of certain value in array
function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

function showMenu(){
	$(".menu4").addClass("open");

	$("#nav").show();
	$("#nav").animate({ 'width' : 300 }, 400, "swing");

	if(current=="home" || current == "the-north-east-tour"){
		$("#ne-food").hide();
		$("#racial-slurs").hide();

		$("#racial-slurs").show();
		$("#racial-slurs").animate({ "left": 0, "top": 0 }, 200, "swing");
	} else if (current == "racial-slurs"){

		$("#racial-slurs").hide();
		$("#ne-tour").hide();

		$("#ne-food").show();
		$("#ne-food").animate({ "left": 0, "top": 0 }, 200, "swing");
	}  else if (current == "ne-food"){

		$("#racial-slurs").hide();
		$("#ne-food").hide();

		$("#ne-tour").show();
		$("#ne-tour").animate({ "left": 0, "top": 0 }, 200, "swing");
	}

	menuUp = true;
}

function hideMenu(){
	$(".menu4").removeClass("open");
	if(current=="home" || current == "ne-food"){
		$("#racial-slur").animate({ "left": 300, "top": 0, 'display' : "none" }, 200, "swing");
	} else if (current == "racial-slurs"){
		$("#ne-food").animate({ "left": 300, "top": 0, 'display' : "none" }, 200, "swing");
	}

	$("#nav>div:nth-child(2)").animate({ "left": 300, "top": "-65px", 'display' : "none" }, 280, "swing");
	$("#nav>div:nth-child(1)").animate({ "left": 300, "top": "-65px", 'display' : "none" }, 350, "swing", function(){
		$("#nav").animate({ 'width' : 0 }, 400, "swing");
		$("#nav").hide();
	});
	menuUp = false;

}

function setMainDimension(){
	if( mainHeight > 500 ){
		//$("#main").css({ 'height' : mainHeight });
		$("#share").css({ 'height' : mainHeight+40 });
		$("#nav").css({ 'height' : mainHeight+19 });
		$("#nav .nav-item").css({ 'height' : mainHeight+19 });
		$("#nav .nav-item:before").css({ 'height' : mainHeight+19 });

	}
	$("#arrowkey").css({ 'top' : mainHeight+25 })
	$("#main").css({'width' : winWidth });
	$("#progress").css({ 'width' : 0 });
}


function resetDOM(){
	$("#main").css({ "background" : "none" });
	$(".characters").hide();
}

function animateEachIn(card, e){
	card.animate({ "left": 350, 'opacity': 1 }, 400, "swing");
	e.animate({ 'left': 270, 'opacity': 1 }, 700, 'swing');
}

function animateEachOut(card, e){
	card.animate({ "left": 450, 'opacity': 0 }, 400, "swing");
	e.animate({ 'left': 240, 'opacity': 0 }, 200, 'swing');
}

function showHide(e){
	e.animate({ 'opacity' : 1 }, 1500);
}

