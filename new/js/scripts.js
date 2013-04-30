/**
 * Resize The Main Real Estate
 */
itHappenedFlag = 0;
function resizeContent(){
	
		minHeight = 480; 				// the min height the mainwrapper can be
		
		windowWidth = $(window).width();// Window WIdth
		newHeight = $(window).height(); // default
		theElement = $(".mainimg");
		
		
		theElement.width(windowWidth); // The Image is always the width of the window
		
		// Determine the crop offset, newHeight becomes the height of the visible image
		// If there is an image
		if(theElement.length){
			imPos = theElement.position();			// Get the position
			imHeight = theElement.height();			// Get the current height
			newHeight = imPos.top + imHeight;		// newHeight is the image height - the crop offset
			//console.log('Original Img Top Offset: '+imPos.top);
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
		theElement.height(newHeight);

}

$(document).ready(function() {
	
	
	
	
	
		resizeContent(); // resize the content on doc ready
		
		$(window).resize(function(){
				resizeContent();
		});
		
		
});

