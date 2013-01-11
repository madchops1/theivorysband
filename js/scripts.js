(function($){ 

    $.fn.extend({
		
		dropDown: function() {
			
			this.children('li').hoverIntent(function() {
	
				$(this).children('ul:first').stop(true, true).slideDown(300);
				
			}, function() {
				
				$(this).children('ul:first').stop(true, true).slideUp(150);
				
			});
			
		},
		
		DDShowCase: function() {
			
			var mainCont = this;
			
			var totalHeight = this.children('#showcase_wrapper').children('.showcase_item').length * 60;
			var screenHeight = mainCont.height();
			var totalSlides = (totalHeight / screenHeight);
			
			var currentSlide = 1;
			
			$(window).resize(function() {
				
				screenHeight = mainCont.height();
				totalSlides = (totalHeight / screenHeight);
				
			});
			
						
			this.children('#showcase_wrapper').children('.showcase_item').hover(function() {
				
				$(this).css({ 'z-index': 2 }).children('a').children('img').stop().animate({ width: '200px', height: '200px' }, 300, function() {
					
					$(this).parent().parent().children('div').stop(true, true).fadeIn(400);
					
				});
				
			}, function() {
				
				$(this).children('div').stop(true, true).fadeOut(200, function() {
					
					$(this).parent().css({ 'z-index': 1 });
					
					$(this).parent().children('a').children('img').stop().animate({ width: '60px', height: '60px' }, 200);
					
				});
				
			});
			
			$('#showcase_arrow_down').click(function() {
				
				if(currentSlide <= totalSlides) {
					
					var posTop = '-'+(screenHeight*currentSlide)+'px';
					
					mainCont.children('#showcase_wrapper').animate({ top: posTop });
					currentSlide++;
					
				}
				
			});
			
			$('#showcase_arrow_up').click(function() {
				
				if(currentSlide > 1) {
										
					var posTop = '-'+(((currentSlide - 1) * screenHeight)-screenHeight)+'px';
					
					mainCont.children('#showcase_wrapper').animate({ top: posTop });
					
					currentSlide--;
					
				}
				
			});
			
		},
		
		DDShowHidden: function() {
			
			var windowWidth = $(window).width();
			
			if(windowWidth <= 1110) {
				
				$('#top_menu').stop().show();
				$('#fixed-scroll, #hide-fixed').hide();
				$('#top_info').css('padding-top', '80px');
				$('#showcase_arrow_up').css('top', '60px');
				$('#showcase_arrow_down').css('top', '80px');
				
			} else {
				
				$('#top_menu').stop().hide();
				$('#fixed-scroll, #hide-fixed').show();
				$('#top_info').css('padding-top', '30px');
				$('#showcase_arrow_up').css('top', '10px');
				$('#showcase_arrow_down').css('top', '30px');
				
			}
			
			$(window).resize(function() {
				
				windowWidth = $(this).width();
				
				if(windowWidth <= 1110) {
					
					$('#top_menu').stop().show();
					$('#fixed-scroll, #hide-fixed').hide();
					$('#top_info').css('padding-top', '80px');
					$('#showcase_arrow_up').css('top', '60px');
					$('#showcase_arrow_down').css('top', '80px');
					
				} else {
					
					$('#top_menu').stop().hide();
					$('#fixed-scroll, #hide-fixed').show();
					$('#top_info').css('padding-top', '30px');
					$('#showcase_arrow_up').css('top', '10px');
					$('#showcase_arrow_down').css('top', '30px');
					
				}
				
			})
			
			this.click(function() {
				
				if($(this).attr('class') === 'more minus') {
					
					$(this).removeClass('minus').addClass('clicked');
					$(this).parent().parent().parent().children('.hidden_content').slideUp(1000);
					
				}
				
				if($(this).attr('class') === 'more') {
					
					$(this).addClass('minus');
					$(this).parent().parent().parent().children('.hidden_content').fadeIn(1000);
					
				}
				
				if($(this).attr('class') === 'more clicked') {
					
					$(this).removeClass('clicked');
					
				}
				
			});
			
		},
		
		hideMenu: function() {
			
			this.click(function() {
				
				if($(this).attr('class') == '') {
					
					$(this).attr('id', 'show-fixed').addClass('clicked');
					$('#fixed-scroll').stop().animate({ right: '-200px' }, 500);
					
				} else {
					
					$(this).attr('id', 'hide-fixed').removeClass('clicked');
					$('#fixed-scroll').stop().animate({ right: 0 }, 500);
					
				}
				
			});
			
		}
		
	});
	
})(jQuery);



/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);