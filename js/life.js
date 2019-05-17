$(document).ready(function(){
	// alert("Document is ready!");
	$("body").addClass("js");

	//choose chapters
	$("#choose-chapter img").click(function(){
		if ($("#content #choose-chapter img").index(this)==1) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(20deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(0deg)");
			$(".chapter h2").html("Robinson makes a boat");
			$(".show-first .p1").html("While I was at work I often thoughtabout the land which I had seen across thewater, and I could not help wishing to goto it. Perhaps people lived there, and if Icould reach it I might find a chance to re-turn home on some ship.");
			$(".show-first .p2").html("I began to think then that perhaps Imight make a canoe out of the trunk of atree. As I thought more about it thisseemed quite easy to do. So I went to work, first cutting down afine cedar tree. It was five feet ten inchesin diameter at the stump, and four feeteleven inches at the distance of twenty-twofeet farther up. ");
			$(".show-first .p3").html("It took more than two weeks to cut thistree down and nearly as long to trim off thebranches. Then I spent a month in shap-ing it, and three times as long in diggingout the inside.");
			$(".chapter-popup article .popup-story").html("When the work was done, I was very muchpleased with it. It would carry twenty-sixmen, and was large enough to hold me andall of my household goods. The boat was about a halfh-our's walkfrom the ocean, and there was a small hillto go over. A ditch or canal must be dugthrough this hill, so as to make a level way for the boat, but when this was done, I could not stir the canoe.");
		}else if ($("#content #choose-chapter img").index(this)==2) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(20deg)");
			$(".chapter h2").html("Coming of the savages");
			$(".show-first .p1").html("About a year and a half had passed aftermy discovery of the footprint when, onemorning, I was alarmed at seeing fivecanoes drawn up on the shore on my sideof the island. The people had all landed.I knew that these canoes carried from four to six men, and I was not able to see bow Icould witbstand so many; so I lay still inmy castle for some time.");
			$(".show-first .p2").html("Bearing no noise, I set myguns against tbe foot of tbe ladder andclimbed to the top of the bill. I washidden from their view, but I could seethe men through my glass. There wereabout thirty of them.")
			$(".show-first .p2").html("");
			$(".chapter-popup article .popup-story").html("They bad kindled a fire and seemed tobe cooking their dinner and dancing aroundit. I then saw them drag two men fromthe boats. One of these they knockeddown, and proceeded to cook him over thefire for their dinner. The other was leftstanding alone, probably waiting until theyshould get ready for him.");
		}else if ($("#content #choose-chapter img").index(this)==0) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(20deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(0deg)");
			$(".chapter h2").html("Robinson explores the island");
			$(".show-first .p1").html("I was soon well again, and started out tosee more of my island home. At first I hadbeen afraid of wild animals and wild men, but now I said, God has taken care of meso far and I believe he will keep me fromharm.");
			$(".show-first .p2").html("One morning in July I started out, goingup the creek which flowed past my house.On both sides lay beautiful meadows ofwaving grass, and many flowers were grow-ing on the banks. I tried to find a kind ofroot out of which the Indians make theirbread, but I found none.");
			$(".show-first .p3").html("The next day I went up the stream again,but I went farther. I found that beyond themeadows were thick woods. In this partof the island were melons and grapes thatwere ripe and sweet.");
			$(".chapter-popup article .popup-story").html("When night came I was so far from homethat I did not try to return. I slept wellin a tree, and the next morning continuedmy journey about four miles, through avalley with }rZt on each side. At the endof this valley I came to an opening, wherethere was a little spring of cold water, andeverything looked fresh and green.");
		}
		event.preventDefault();
	});	

	//article popup
	$(".chapter .read-more, .chapter-popup .close-button a").click(function(event){
		$("body").toggleClass("show-chapter-popup");
		event.preventDefault();
	});

	//footer view sitemap
	$("#sitemap").toggleClass("not-show");
	$("#view-sitemap button").click(function(){
		$("#sitemap").toggleClass("not-show");
		$("#sitemap").toggleClass("show");
	});
});