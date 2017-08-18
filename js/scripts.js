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
	activeskill = 1;
	function changeskill(){
		console.log("skill changed");
		activeskill+=1;
		$(".skill").removeClass("active");
		$(".starholder").removeClass("activestar");
		$('.skill'+activeskill).addClass("active");
		$('.activeskill img').attr("src","img/skill"+activeskill+".png");
		switch(activeskill)
		{
			case 1: $(".activeskillcontainer .skillname").html("Python (Advanced)");stars=5;break;
			case 2: $(".activeskillcontainer .skillname").html("Django (Advanced)");stars=5;break;
			case 3: $(".activeskillcontainer .skillname").html("NodeJs (Intermediate)");stars=4;break;
			case 4: $(".activeskillcontainer .skillname").html("AngularJs (Advanced)");stars=5;break;
			case 5: $(".activeskillcontainer .skillname").html("ReactJs (Intermediate)");stars=4;break;
			case 6: $(".activeskillcontainer .skillname").html("ExpressJs (Intermediate)");stars=4;break;
			case 7: $(".activeskillcontainer .skillname").html("MongoDB (Intermediate)");stars=4;break;
			case 8: $(".activeskillcontainer .skillname").html("Jquery (Advanced)");stars=5;break;
		}
		if(activeskill==8)
		{
			activeskill=0;
		}
		$(".starcontainer .starholder:nth-child(-n+"+stars+")").addClass("activestar");
	}
	setInterval(changeskill,4000);
});
