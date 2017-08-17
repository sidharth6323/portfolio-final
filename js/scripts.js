$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['section1', 'section2', 'section3', 'section4'],
		onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);
				$('li').removeClass("selected");
				console.log(index,nextIndex);
				switch(nextIndex)
				{
					case 1:$('.about').addClass("selected");break;
					case 2:$('.expertise').addClass("selected");break;
					case 3:$('.work').addClass("selected");break;
					case 4:$('.projects').addClass("selected");break;
					case 5:$('.hire').addClass("selected");break;
				}
				if(nextIndex>=2)
				{
					$('.arrowup').fadeIn(1000);
				}
				else {
					$('.arrowup').fadeOut(1000);
				}
		}
	});
	$(window).scroll(function(){
		console.log("scrolled");
	})
});
