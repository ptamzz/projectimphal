/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var ans, numTimes, len, peg = 0, count = 0, page = 'home',
	race = [], winHeight, winWidth, mainHeight, timerObject, count = 1, timerSet = false, slideState = true;
$(function() {

	dom = $('body, html');
	winHeight = $(window).height();
	winWidth = $(window).width();

	console.log("Heigth: " + winHeight + ", Width" + winWidth);

	//Mapping horizontal to vertical scroll
	/* $("#main").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 25);
    	event.preventDefault();
	});
	*/

	$(document).one("click", ".skip-intro", function() { hideWCmsg(); });

	//Capture LEFT/RIGHT arrow press
	$('body').keyup(function(e) {
		console.log(e.keyCode);
		if (e.keyCode == 37) { slideRight(); console.log("LEFT"); }   		// RIGHT arrow
			else if(e.keyCode == 39) { slideLeft(); console.log("RIGHT"); }	// LEFT arrow // 27 = esc
	});

	mainHeight = winHeight - 200;

	if( 600 < mainHeight ){
		$("#main").css({ 'height' : mainHeight, 'width' : winWidth });
		$("#share").css({ 'height' : mainHeight+40 });
	}

	//Hash URL Handling
	handleURL();													//handles URL on first time load
	$(window).bind('hashchange', function() { handleURL();  });		//Handles URL on hashchange


	$(document).one("mouseover", "#states", function() {
		//Set timer is NOT already set
		if(!timerSet){
		  timer();
		  timerSet = true;
		}
	});

	$(document).on("click", ".result-action .score", function() {
		loadItem("home.php", "general");
		//slideLeft();
	});

	
/*
	//Start quiz
	$(document).on("click", ".quiz-start", function() {
		$(this).hide();
		$('.quiz-area').show();
		$('.group-1').show();
	});

	$(document).on("click", ".groups .img", function() {
		var temp = $(this).parent('.groups');
		if(count<= 9){
			temp.hide();
			temp.next('.groups').show();
			console.log($(this).data('img'));

			race[count] = $(this).data('img');	//Get Race ID

			if(count == 9){ 
				$('.or').hide(); 	//Hide or

				//Magic to generate viz
				race.sort();
				
				var counts

				console.log("Max: " + counts);

				//Find number of times most repeated value
				for (var i = 0, len = race.length; i < len; i++) {
					var temp = countInArray(race, i);
					peg = (peg > temp) ? peg : temp;
				}

				//Set radius & position
				for (var i = 0, len = race.length; i < len; i++) {
					var temp = countInArray(race, i);

					if(temp == 0){
						$('.graph-'+i+' .graph-you').css({
							'width' : 6,
							'height' : 6,
							'margin-left' : -3,
							'top' : 50 - 3
						});
					} else {
						$('.graph-'+i+' .graph-you').css({
							'width' : (100/peg)*temp,
							'height' : (100/peg)*temp,
							'margin-left' : -1*((100/peg)*temp)/2,
							'top' : 50 - ((100/peg)*temp)/2
						});
					}
				}

			}		
			
			count++;
		}

		$('body').on("click", ".result-action .score", function(){
			$("#quiz-pane").animate({ 
				'left' : -1*(winWidth)+200
			}, 300);

			$("#map").animate({ 
				'left' : 0 
			}, 300, function(){
				$("#map").animate({ 
					'height' : 600 
				}, 300);

				$("#central-wrap").animate({ 
					'height' : 600 
				}, 300);
			});
		});
		
	});
*/

}); // jQuery $(funtion() ends

function getPage(hash){
	console.log("getPage");
	var url = (hash.charAt(1) == "/" ? hash.substr(2) : hash.substr(1)); //To work for both #/page-name & #page-name URL structure
	return url;
}

function handleURL(){
	console.log("handleURL");
	page =  getPage(window.location.hash);	//Get URL hash value "#/hashvalue" & remove "#/" 
	page = (page == '') ? 'home' : page;

	//If Home, show welcome message
	if(page == 'home') {
		$("#welcome-msg").css({ 'height' : winHeight, 'display' : 'block' });
		getTyped();

		loadItem(page+".php", 'general');

		//Load random quiz
		/*
		$.getJSON( "php/get-quiz-name.php", function(data) {
			console.log( "Returned Page Name: " + data.page );
			if(data.page == "error.php"){
				loadItem(data.page, 'general');
			} else {
				console.log("Second Else");
				loadItem(data.page, 'quiz');
			}
		});
		*/

	} else {
		//Load specific page
		loadItem(page+".php", 'quiz');
	}


	// $('body').load("page/"+page+".php", function(){
	// 	if(page == 'home') { 
	// 		$("#thirdline .round").hide();
	// 		getTyped();

	// 		$('#map').css({ 'left' : winWidth+200 });
	// 	}
	// });	//Get New viewPane
}

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
		$('.nav').animate({ 'left': 0 }, 300, 'swing'); 
	});
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


function loadItem(page, type){

	var path = (type == 'general' ? "page/" : "page/quizzes/");

	$.get(path+page, /*{ "page" : encodeURIComponent(email) },*/ function (html) {
		$("#main").html(html);

		if(page == "place-the-states.php"){ initiateDragDrop(); }
			else if (page == "home.php") {  
				$('.nav').css({ 'height' : mainHeight });
				$('.characters').css({ 'height' : mainHeight, 'width' : winWidth-300 });
				$("#main").scrollTo("#first-card", 500);
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


function slideLeft(){
	var e = $("#main .inview");
	console.log("slideLeft()");

	if (e.data("slidestate")){
		$("#main").scrollTo(e.next(), 500);
		e.removeClass('inview');
		e.next().addClass('inview');

		console.log("SlidLeft");
	}
	
}

function slideRight(){
	var e = $("#main .inview");
	console.log("slideRight()");

	if (e.data("slidestate")){
		$("#main").scrollTo(e.prev(), 500);
		e.removeClass('inview');
		e.prev().addClass('inview');

		console.log("SlidRight");
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
