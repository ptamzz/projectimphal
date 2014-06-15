/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var ans, numTimes, len, peg = 0, count = 0, url = 'home',
	race = [], winHeight, winWidth, mainHeight, timerObject, count = 1, timerSet = false, slideState = true
	current = "home", step = 0, menuUp = false;
$(function() {

	//Get window Height & Width + set DOM height & widths
	dom = $('body, html');
	winHeight = $(window).height();
	winWidth = $(window).width();
	mainHeight = winHeight - 200;
	homeWidth = winWidth-300;

	if( 600 < mainHeight ){
		$("#main").css({ 'height' : mainHeight, 'width' : winWidth });
		$("#share").css({ 'height' : mainHeight+40 });
	}

	console.log("Heigth: " + winHeight + ", Width: " + winWidth);


	//Handle Basic URL hash-bang
	handleURL();													//handles URL on first time load
	$(window).bind('hashchange', function() { handleURL();  });		//Handles URL on hashchange


	//Skip Intro
	$(document).on("click", ".skip-intro", function() { hideWCmsg(); });

	//Show/Hide Menu
	$(document).on("click", "#menu", function() { 
		console.log("menu-btn-clicked");
		if(!menuUp) { 
			console.log("first"); 
			showMenu(); 
		} else { 
			console.log("second"); 
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
		//loadItem("page/" +href+".php");
	});

	//Set Page & Step Count on Nav Clicks
	$(document).on("click", ".basic li", function() {  current = $(this).data('href'); });

	//Capture LEFT/RIGHT arrow press
	$('body').keyup(function(e) {
		console.log(e.keyCode);
		if (e.keyCode == 37) { 						// LEFT arrow
			step--;
			decreaseStep(step);
		} else if(e.keyCode == 39) { 				// RIGHT arrow // 27 = esc
			step++;
			increaseStep(step);
		}	
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

}); // jQuery $(funtion() ends

function slideLeft(){
	var e = $("#main .inview");
	console.log("slideLeft()");

	//var card = $("#chinky-card .card-text:first-child");

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

	console.log("Current: " + current + ", Step: " + step);

	//What to do with each keyPress
	switch(step){
		case 0:

			if(current == "home"){
				
			}
	       
	        break;
	    case 1:

			if(current == "home"){
				$("#first-card .one").animate({ "left": 500, 'opacity': 0 }, 200, "swing", function(){
					$(this).css({ "left": 800 });
				});
				
				$("#first-card .two").animate({ "left": 600, 'opacity': 1 }, 400, "swing",function(){
					showMenu();
				});

			} else if(current == "racial-slurs"){
				slideRight();
			}
	       
	        break;

	    case 2:

			if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").show(200);
				$("#line-two").show(200);
				$(".one").fadeIn();
				$("#kid-one").css({ 'background-position' : '-350px' });
			}
	       
	        break;

	    case 3:

	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#line-two").hide();
				$(".one").hide();
				$(".two").fadeIn();
				$("#line-one").show(200);
				$("#kid-one").css({ 'background-position' : 0 });
			}
	       
	        break;
	    case 4:
	       if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").css({ 'background-position' : "-473px 55px" });
				$(".two").hide();
				$(".three").fadeIn();

				$("#bar").removeClass("pull-bar").addClass("animate-bar");
			}

	        break;
	    case 5:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").hide();
				$(".three").hide();
				$(".four").fadeIn();

				$("#bar").removeClass("animate-bar").addClass("pull-bar");
			}
	       
	        break;
	    case 6:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				slideRight();
			}
	       
	        break;
	    default:
	    	//Default step

	}
}

function decreaseStep(step){
	console.log("Current: " + current + ", Step: " + step);
	//What to do with each keyPress
	switch(step){
		case 0:

			if(current == "home"){
				$("#first-card .two").animate({ "left": 500, 'opacity': 0 }, 100, "swing", function(){
					$("#first-card .two").css({ "left": 800 });
				});

				$("#first-card .one").animate({ "left": 600, 'opacity': 1 }, 400, "swing",function(){
					hideMenu();
				});
			}
	       
	        break;
	    case 1:

			if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				slideLeft(); 

				$("#creepy-guy").hide();
				$("#line-two").hide();
				$(".one").hide();
				$("#kid-one").css({ 'background-position' : 0 });
			}
	       
	        break;
	    case 2:

			if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#line-two").fadeIn();
				$(".one").fadeIn();
				$(".two").hide();
				$("#line-one").hide();
				$("#kid-one").css({ 'background-position' : '-350px' });
			}
	       
	        break;
	    case 3:

	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").css({ 'background-position' : "0" });
				$(".two").fadeIn();
				$(".three").hide();

				$("#bar").addClass("pull-bar").removeClass("animate-bar");
			}
	       
	        break;
	    case 4:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").fadeIn();
				$(".three").fadeIn();
				$(".four").hide();

				$("#bar").removeClass("pull-bar").addClass("animate-bar");
			}

	        break;
	    case 5:
		    if(current == "home"){
					//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
		    	slideLeft();
		    }

	        break;
	    case 6:
	       
	        break;
	    default:
	    	//Default step

	}
}

function handleURL(){
	console.log("handleURL");

	hash = (window.location.hash == '') ? '#/home' : window.location.hash;

	url = hash.split("/"); //Get window hash value and split it on "/"
	path = (url[1] == "quiz" ? "page/quizzes/" + url[2] : "page/" + url[1]);	//If-Else quiz
	current = (url[1] == "quiz" ? url[2] : url[1]);	//For Current page
	console.log("path: " + path + ", current: " + current + ", steps: " + step );

	//If Home, show welcome message
	if(url[1] == 'home') {
		$("#welcome-msg").css({ 'height' : winHeight, 'display' : 'block' });
		getTyped();

		loadItem("page/home.php");
	} else {
		//Load specific page
		loadItem(path+".php");
	}

	
}


function loadItem(path){

	//var path = (type == 'general' ? "page/" : "page/quizzes/");

	$.get(path, function (html) {
		$("#main").html(html);

		if(path == "page/quizzes/place-the-states.php"){ initiateDragDrop(); }
			else if (path == "page/home.php") {  
				//$('.characters').css({ 'height' : mainHeight, 'width' : winWidth });
				//$("#main").scrollTo("#first-card", 500);
					
			} else {
				showFirstMsg(); //Flyin first card message
			}
		$('.characters').css({ 'height' : mainHeight, 'width' : winWidth });
		$('.middle-container').css({ 'height' : mainHeight-350, 'width' : homeWidth-300, 'left' : 450 });

		var $container = $('.isotope');
		$container.css({ 'height' : mainHeight-100 });
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

	})
		 .fail(function() {
			$.get("page/error.php", function (html) {
				$("#main").html(html);
			})
		});




}

function timer(){
	
	var t = 0, m = 0;
	timerObject = setInterval(function(){myTimer()}, 1000);

	function myTimer() {
		$(".timer").html(t);
	    t++;
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
				console.log("True: " + realCount );
				clearInterval(timerObject);	//Clear timer
				timerSet = false;

				//Show Share box
				slideLeft();
			}
			realCount++;
		}
	});

	$("#states").css({ 'height': mainHeight });
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
				'left': '-355px',
				'top': '307px',
				'width': '129px',
				'height': '120px'
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
        strings: ["Most of the racial stereotype based crimes are caused out of "],
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
		if(step <= 0){ showFirstMsg(); }
	});
}

function showFirstMsg(){
	$("#first-card .one").animate({ "left": 600, 'opacity': 1 }, 400, "swing");
	$('#line-one').animate({ 'left': 500 }, 700, 'swing');
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
	$("#nav").show();
	$("#nav div:nth-child(1)").animate({ "left": 0, "top": 0 }, 200, "swing");
	$("#nav div:nth-child(2)").animate({ "left": 0, "top": 0 }, 300, "swing");
	$("#nav div:nth-child(3)").animate({ "left": 0, "top": 0 }, 400, "swing");
	$("#nav div:nth-child(4)").animate({ "left": 0, "top": 0 }, 500, "swing");
	$("#nav div:nth-child(5)").animate({ "left": 0, "top": 0 }, 600, "swing");
	menuUp = true;
}

function hideMenu(){
	$("#nav div:nth-child(5)").animate({ "left": 300, "top": "-65px" }, 70, "swing");
	$("#nav div:nth-child(4)").animate({ "left": 300, "top": "-65px" }, 140, "swing");
	$("#nav div:nth-child(3)").animate({ "left": 300, "top": "-65px" }, 210, "swing");
	$("#nav div:nth-child(2)").animate({ "left": 300, "top": "-65px" }, 280, "swing");
	$("#nav div:nth-child(1)").animate({ "left": 300, "top": "-65px" }, 350, "swing", function(){
		$("#nav").hide();
	});
	menuUp = false;

}
