/**
 * Resize The Main Real Estate
 */
itHappenedFlag = 0;
ytGo = 0;
function resizeContent(){
		console.log('resizing image');
		minHeight = 480; 				// the min height the mainwrapper can be
		
		windowWidth = $(window).width();// Window WIdth
		newHeight = $(window).height(); // default
		theElement = $(".mainimg");
		
		$(".pagewrapper").height(newHeight);
		
		// Determine the crop offset, newHeight becomes the height of the visible image
		// If there is an image
		if(theElement.length){
			imPos = theElement.position();			// Get the position
			imHeight = theElement.height();			// Get the current height
			//newHeight = imPos.top + imHeight;		// newHeight is the image height - the crop offset
			//console.log('Original Img Top Offset: '+imPos.top);
			//if(imHeight < newHeight + 100){ 
				
			//} else {
				theElement.width(windowWidth); // The Image is always the width of the window
			//}
		}
		
		
		
		
		// If the visible image height is less than min height
		// then we freeze the image width 
		if(newHeight < minHeight){ 
			

			//Freeze the img
			if(itHappenedFlag == 0){
				freezeHeight = newHeight;
				freezeWidth = $(window).width(); // get window width now
				//console.log('It Happened.' + freezeWidth + ' x ' + freezeHeight );
				itHappenedFlag = 1;
			}
			//freezeWidth = parseInt(freezeWidth + 10);
			
			// freezeWidth is remembered from when it happend
			$("#main-real-estate img").width(freezeWidth);
			newHeight = minHeight;
			
		} 
		// Unfreeze the image
		else {
			itHappenedFlag = 0; // Unfreeze
		}
		
		
		// Set the new height
		//theElement.height(newHeight);

}

function playing(){
	$("#ytb-resume").fadeOut(100);
	$("#ytb-pause").delay(100).fadeIn(100);
}

function paused(){
	$("#ytb-pause").fadeOut(100);
	$("#ytb-resume").delay(100).fadeIn(100);
}

//create youtube player
var player;
window.onYouTubePlayerAPIReady = function() {
	console.log('yt ready!');
	//delete player;
	//setTimeout(function(){
	    player = new YT.Player('player', {
	      height: '100%',
	      width: '100%',
	      videoId: 'JONFg43WvZQ',
	      events: {
	        'onReady': onPlayerReady,
	        'onStateChange': onPlayerStateChange
	      }
	    });
	    
	    document.getElementById('ytb-resume').onclick = function() {
	        player.playVideo();
	        playing();
	    };
	    
	    document.getElementById('ytb-pause').onclick = function() {
	        player.pauseVideo();
	        paused();
	    };
	    
	//},500);
	ytGo = 1;
	
}

// autoplay video
window.onPlayerReady = function(event) {
    event.target.playVideo();
    playing();
}

// when video ends
window.onPlayerStateChange = function(event) {        
    if(event.data === 0) {          
        $(".video").fadeOut('slow');
        paused();
    }
}

var photoactive = 0;
$(document).ready(function() {
	console.log('ytgo: '+ytGo);
	//if(ytGo == 0){
	//  $("iframe#player").remove();
	//  onYouTubePlayerAPIReady();
	//}
	resizeContent(); // resize the content on doc ready
	
	$(window).resize(function(){
			resizeContent();
	});
	
	/*
	$(".mainnav ul li a").click(function(e){
		e.preventDefault();
		$(".mainnav ul li a").removeClass('active');
		$(this).addClass('active');
	});
	*/
	
	$("#music").click(function(e){
		e.preventDefault();
		$("#soundcloud-modal").toggle();
		$("#facebook-modal").hide();
		$("#bio-modal").hide();
	});
	
	$("#live").click(function(e){
		e.preventDefault();
		$("#facebook-modal").toggle();
		$("#soundcloud-modal").hide();
		$("#bio-modal").hide();
	});
	
	$("#bio").click(function(e){
		e.preventDefault();
		$("#bio-modal").toggle();
		$("#soundcloud-modal").hide();
		$("#facebook-modal").hide();
	});
	
	//$('.zoom').zoomy();   
	
	/*
	$("#photos").click(function(e){
		
		e.preventDefault();
		if(photoactive == 0){
			$("#instagram-bar").fadeOut().delay(400).fadeIn();
			$("#instagram-bar").attr('src','http://widget.stagram.com/in/theivoryschi/?s=90&w=5&h=4&b=0&p=0');
			$("#instagram-bar").css('top','120px');
			$("#instagram-bar").css('right','40px');
			$("#instagram-bar").css('left','auto');

			$("#instagram-bar").css('bottom','');
			$("#instagram-bar").css('width','450px');
			$("#instagram-bar").css('height','360px');
			
			
			photoactive = 1;
		} else {
			$("#instagram-bar").fadeOut().delay(400).fadeIn();
			$("#instagram-bar").attr('src','http://widget.stagram.com/in/theivoryschi/?s=85&w=40&h=1&b=0&p=0');
			$("#instagram-bar").css('top','');
			$("#instagram-bar").css('right','auto');
			$("#instagram-bar").css('left','0px');

			$("#instagram-bar").css('bottom','40px');
			$("#instagram-bar").css('width','100%');
			$("#instagram-bar").css('height','85px');
			
			photoactive = 0;
		}
		
	});
	*/
		
});

