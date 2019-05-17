$(document).ready(function(){
	$("body").addClass("js");

	//choose chapters
	$("#choose-chapter img").click(function(){
		if ($("#content #choose-chapter img").index(this)==1) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(20deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(0deg)");
			$(".chapter h2").html("The voyage");
			$(".show-first .p1").html("The ship on which I found myself, that bright September morning, was a large one.The sailors were getting it ready for the voyage. Soon I heard the cry, **A—allha—a—nds! up anchor, a—ho—oy! At once everything seemed to be filled with life; the sails were loosed, the yards braced,and the anchor slowly raised.");
			$(".show-first .p2").html("Orders were given so rapidly and there was such a hurrying about and so many strange noises that I hardly knew what to make of it. The boom of a cannon was heard above the shouts of the sailors andthe creaking of the sails; then the vessel moved slowly out of the harbor. In a short time we were under way.");
			$(".show-first .p3").html("I turned to look at the home I was leaving. I could see the streets with the peo-ple passing up and down, the houses, andthe gardens. Soon I could see only the towers; finally they, too, faded from sight, and I was out on the great ocean.");
			$(".chapter-popup article .popup-story").html("A strong wind arose, and the ship rocked so fearfully from side to side that I became dizzy. The storm grew worse, and I thought that every wave would surely swal-low up the ship. Every time it went down into the trough or hollow of the sea, I feared it would never come up again. I told my friend that I was very much afraid; but heonly laughed at me and said, 'Oh, you willget used to this after a little.'");
		}else if ($("#content #choose-chapter img").index(this)==2) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(20deg)");
			$(".chapter h2").html("Robinson in his new home");
			$(".show-first .p1").html("I began to wonder what I should do here. I was very wet and had no changeof clothes. I was hungry and thirsty and did not know where to look for food or drink. I was also afraid that wild animals might attack me, for I had no gun.");
			$(".show-first .p2").html("It was growing dark and I must look fora safe place to sleep. Where should I find it? For some time I stood still, dazed and helpless, not knowing what to do. At last I said, 'I will do as the birds do, find a bed in a tree.' I soon found a treewith thick branches in which I could settlemyself quite comfortably and sleep withoutdanger of falling.");
			$(".show-first .p3").html("");
			$(".chapter-popup article .popup-story").html("As I had nothing with which to defendmyself but a knife, I cut me a stout stick.Then I climbed the tree, arranged myself carefully and fell asleep. Being very tired I slept soundly till morning.");
		}else if ($("#content #choose-chapter img").index(this)==0) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(20deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(0deg)");
			$(".chapter h2").html("Robinson at home");
			$(".show-first .p1").html("When I was a little boy, I lived in a greatcity by the sea, with my father and mother.They were very kind to me and loved medearly. They wished me to go to schooland learn a great deal, so that I mightsome day be a useful man. But I was lazy, and liked better to playby the river than to study. I often sat hour after hour watching the great shipsloading and unloading their cargoes, andas they sailed away I wished I might gowith them.");
			$(".show-first .p2").html("My father had told me that the shipscame from lands where the men did notlook like those I knew, and the plants andanimals were very different from any I hadseen.He expected me to become a merchant,but I could think of nothing but the ships,and I often ran away from my work to watch them.");
			$(".show-first .p3").html("When I was sixteen years old, father saidto me one day: 'Robinson, I wish you tobe a merchant. If you attend to your work,you shall seme day take charge of my busi-ness; but if you are lazy, no one will carefor you and you will not be able to care for yourself.' He talked to me a long timeabout my bad habits.");
			$(".chapter-popup article .popup-story").html("Father saw that I was not doing my workwell, and one morning he said: 'Robinson,what will become of you? Do you want tobecome a good-for-nothing, and some daybeg for your bread?' I said: 'but father, I do not wish to be a merchant. I want to go away on one ofthose ships. It must be great fun to be out on the ocean, and I want to see those strangelands.'");
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