/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var ans, numTimes, len, peg = 0, count = 0, url = 'home', time,
	race = [], winHeight, winWidth, mainHeight, timerObject, count = 1, timerSet = false, slideState = true
	current = "home", step = 0, menuUp = false, quiz = false;
$(function() {

	//Get window Height & Width + set DOM height & widths
	dom = $('body, html');
	winHeight = $(window).height();
	winWidth = $(window).width();
	mainHeight = winHeight - 200;
	homeWidth = winWidth-300;

	setMainDimension();

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

		$(".arrow-key-nudge").fadeOut();
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
	console.log("slideLeft()");

	var e = $("#main .inview");

	if (e.data("slidestate")){
		$("#main").scrollTo(e.prev(), 500);
		e.removeClass('inview');
		e.prev().addClass('inview');
	} 
	
}

function slideRight(){
	console.log("slideRight()");

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
				$("#second-card .one").animate({ "left": 600, 'opacity': 1 }, 400, "swing" );

			} else if(current == "ne-food"){
				slideRight();

				$("#second-card .one").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
				$("#ngari").show();
				$("#ngari").animate({ "left": 0 }, 800, "swing");
			} 
	       
	        break;

	    case 2:

			if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				slideRight();
				$("#line-one").hide();

				$("#creepy-guy").fadeIn();
				$("#line-two").fadeIn();
				$("#third-card .one").fadeIn();
				$("#kid-one").css({ 'background-position' : '-350px' });
			} else if(current == "ne-food"){
				$("#second-card .one").hide();

				$("#second-card .two").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
				$("#hawaijar").show();
				$("#hawaijar").animate({ "left": "35%" }, 800, "swing");
			} 
	       
	        break;

	    case 3:

	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").hide();
				$("#line-two").hide();
				$("#third-card .one").hide();
				$(".middle-container").hide();
				
				$("#third-card .two").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
				$("#line-one").fadeIn();
				$("#kid-one").css({ 'background-position' : 0 });
			} else if(current == "ne-food"){
				$("#second-card .two").hide();

				$("#second-card .three").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
				$("#soibum").show();
				$("#soibum").animate({ "left": "70%" }, 800, "swing");
			} 
	       
	        break;
	    case 4:
	       if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#creepy-guy").css({ 'background-position' : "-473px 55px" });
				$("#third-card .two").hide();

				$("#creepy-guy").fadeIn();
				$(".middle-container").fadeIn();
				$("#third-card .three").animate({ "left": 600, 'opacity': 1 }, 200, "swing");

				$("#bar").show();
				$("#bar").removeClass("pull-bar").addClass("animate-bar");
			} else if(current == "ne-food"){
				$("#second-card .three").hide();

				$("#second-card .four").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
			} 

	        break;
	    case 5:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				$("#bar").removeClass("animate-bar").addClass("pull-bar");
				$("#bar").hide();
				$("#creepy-guy").hide();
				$("#third-card .three").hide();

				slideRight();
				$("#fourth-card .one").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
			}  else if(current == "ne-food"){
				$("#ngari").hide();
				$("#hawaijar").hide();
				$("#soibum").hide();
				slideRight();
				$("#third-card .one").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
			} 
	       
	        break;
	    case 6:
	    	if(current == "home"){
				//Home ends at case 1 nothing here
			} else if (current=="racial-slurs"){
				slideRight();
				$("#main").css({
					"background" : "url(img/momo_nepal.jpg)",
					'background-repeat': 'no-repeat',
					'background-size': 'cover',
					'background-position' : '50% 50%'
				});

				showMenu();
			} else if(current == "ne-food"){
				slideRight();
				$("#fourth-card .one").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
			} 
	       
	        break;
	    case 7:
	    	if(current == "ne-food"){
				$("#fourth-card .one").hide();
				$("#fourth-card .two").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
				
				$("#fourth-card .middle-container").fadeIn();
				$("#eromba").show();
				$("#eromba").animate({ "left": 0 }, 800, "swing");
			} 
	       
	        break;
	    case 8:
	    	if(current == "ne-food"){
				$("#fourth-card .two").hide();

				$("#fourth-card .three").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
				$("#pork-bamboo-shoot").show();
				$("#pork-bamboo-shoot").animate({ "left": "50%" }, 800, "swing");
			} 
	       
	        break;
	    case 9:
	    	if(current == "ne-food"){
	    		$("#fourth-card .middle-container").hide();
	    		$("#eromba").hide();
	    		$("#pork-bamboo-shoot").hide();

				slideRight();
				$("#fifth-card .one").animate({ "left": 600, 'opacity': 1 }, 200, "swing");
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
	reset();	//Reset DOM javascript manipulations

	hash = (window.location.hash == '') ? '#/home' : window.location.hash;

	url = hash.split("/"); //Get window hash value and split it on "/"
	path = (url[1] == "quiz" ? "page/quizzes/" + url[2] : "page/" + url[1]);	//If-Else quiz
	current = (url[1] == "quiz" ? url[2] : url[1]);	//For Current page
	quiz = (url[1] == "quiz" ? true : false );	//To check whether it's a quiz or normal page

	step = 0; 
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

			} else {
				showFirstMsg(); //Flyin first card message
			}

		if(!quiz && current != "home"){

			console.log("Home -- " + current);
			$('.characters').css({ 'height' : mainHeight, 'width' : winWidth });
			$('.characters').fadeIn();
			$('.middle-container').css({ 
				'height' : mainHeight-350, 
				'width' : homeWidth-300, 
				'left' : '50%', 
				'margin-left' : (-1*(homeWidth-300))/2 
			});
		}

		if (current == "ne-food"){
			$(".food-pic").css({ 'width' : winWidth, 'height' : mainHeight+21, 'left' : winWidth });
		}
		

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
				console.log("True: " + realCount );
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

		console.log("hideWCmsg");
		$('.row').show();

		//If arrows have not been used as yet
		$('.characters').css({ 'height' : mainHeight, 'width' : winWidth });

		if(step <= 0){ showFirstMsg(); }
		$('.characters').fadeIn();

		$(".arrow-key-nudge").fadeIn();
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

function setMainDimension(){
	if( 600 < mainHeight ){
		$("#main").css({ 'height' : mainHeight });
		$("#share").css({ 'height' : mainHeight+40 });
	}

	$("#main").css({'width' : winWidth });
}


function reset(){
	$("#main").css({ "background" : "none" });
	$(".characters").hide();
}