/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var ans, numTimes, len, peg = 0, count = 0, page = 'home',
	race = [];
$(function() {

	dom = $('body, html');
	winHeight = $(window).height();
	winWidth = $(window).width();

	//Hash URL Handling
	handleURL();													//handles URL on first time load
	$(window).bind('hashchange', function() { handleURL();  });		//Handles URL on hashchange

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

}); // jQuery $(funtion() ends

function getPage(hash){
	var url = (hash.charAt(1) == "/" ? hash.substr(2) : hash.substr(1)); //To work for both #/page-name & #page-name URL structure
	return url;
}

function handleURL(p){
	page =  getPage(window.location.hash);	//Get URL hash value "#/hashvalue" & remove "#/" 
	page = (page == '') ? 'home' : page;

	$('body').load("page/"+page+".php", function(){
		if(page == 'home') { 
			$("#thirdline .round").hide();
			getTyped();

			$('#map').css({ 'left' : winWidth+200 });
		}
	});	//Get New viewPane
}

//Get Typewriter Effect
function getTyped(){
	 $("#firstline").typed({
	        strings: ["Most of the racial Stereotype based crimes are caused out of "],
	        typeSpeed: 5,
	        callback: function(){
	        	$("#secondline").typed({
			        strings: ["^50 Ignorance"],
			        typeSpeed: 5,
			        callback: function(){
			        	//window.location.hash = "#/who-do-you-want-to-be-friends-with";
			        	
			        	$("#thirdline .curb").typed({
					        strings: ["^200 Take a short quiz & find out where you stand"],
					        typeSpeed: 5,
					        callback: function(){

					        	var intervalHandle = setInterval(function(){
					        		//$("#thirdline .round").show('fast');
					        		console.log("Fold called");
					        		$("#welcome-msg").hide('blind', { 'direction' : 'vertical' }, 500);
					        		clearInterval(intervalHandle);
					        	},1000);	
					        }
				        });
			        }
		        });	// Second callBack ends

	        } // First CallBack ends
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


function getStatus(url){
	$.ajax({
	    url: url,
	    type: 'GET',
	    success: function(res) {
	    }
	});
}


