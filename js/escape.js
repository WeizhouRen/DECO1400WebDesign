$(document).ready(function(){
	$("body").addClass("js");

	//choose chapters
	$("#choose-chapter img").click(function(){
		if ($("#content #choose-chapter img").index(this)==1) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(20deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(0deg)");
			$(".chapter h2").html("New trouble");
			$(".show-first .p1").html("The rainy season was now over, and Friday and I began to make ready for our journey. One morning I sent Friday to the shore for a turtle. He had not been gone long when he came running back in great terror, crying, 'Oh, master! Oh, master! Oh,sorrow! Oh, death! ' 'What is the matter, Friday?' I asked.");
			$(".show-first .p2").html("'0h, master, yonder there, one, two,three canoes, one, two, three; carry Friday off, cut Friday in pieces and eat him, cried he, trembling from head to joot.'Do not be afraid, Friday,' said I. 'We will go out and drive them away. They shall not carry you off if you will help me to fight. Now will you do all that I tell you to do?''Me shoot,' cried Friday, 'but there come many number.' 'Never mind that, Friday; just do as I tell you.'");
			$(".show-first .p3").html("Seeing me so cool, Friday became more quiet himself.We loaded two pistols and four guns with bullets, then I hung my great sword by myside and gave Friday a hatchet.");
			$(".chapter-popup article .popup-story").html("When we were ready, I took my spy-glass and went up the hill to see what had become of the boats. There were twenty-one savages and two prisoners in three canoes. They were coming, as before, tomake a feast.");
		}else if ($("#content #choose-chapter img").index(this)==2) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(20deg)");
			$(".chapter h2").html("happy meeting");
			$(".show-first .p1").html("Imagine my surprise, on jumping into the boat, to find another captive, bound hand and foot, and almost dead with fright. He was lying in the bottom of the canoe. I cut the ropes which bound him and tried to raise him up, but he could neither sit nor speak. He groaned piteously.");
			$(".show-first .p2").html("I told Friday to speak to him and tell him that we were his friends. Friday did so, and the prisoner then sat up in the boat.Friday stared at him a moment, then threw his arms around him, kissing and hugging him, and crying, laughing, dancing, and singing by turns. It was some time before he queited down enough to tell me what made him so happy.");
			$(".show-first .p3").html("");
			$(".chapter-popup article .popup-story").html("This meeting of father and son put an end to our pursuit of the savages, for they were now nearly out of sight. I was glad afterward that we did not go,for a great storm arose, and there seemed very little doubt that the savages who were in the boat were all drowned. Friday was so busy taking care of his father that I did not like to call him away. At last I asked him if he had given his father any bread. He shook his head and said, 'None, ugly dog eat all up self.'");
		}else if ($("#content #choose-chapter img").index(this)==0) {
			$("#choose-chapter figure #anchor1").css("transform","rotate(20deg)");
			$("#choose-chapter figure #anchor2").css("transform","rotate(0deg)");
			$("#choose-chapter figure #anchor3").css("transform","rotate(0deg)");
			$(".chapter h2").html("robinson prepares for a journey");
			$(".show-first .p1").html("One day when Friday and I were walking by the shore I said to him, 'Do you notwish to go back to your own country?''Yes,' said Friday, 'I be much glad to be at my own country.''What would you do there? Would yoube a man eater such as you used to be?' Friday shook his head and said, 'No, no. Friday tell them to live good and pray to Grod; tell them to eat corn, bread, andcattle-flesh and drink milk; no eat man again.'");
			$(".show-first .p2").html("'But, Friday, they will kill you.' 'Oh, no,' said Friday, 'they no kill me, they will love learn.' 'Then will you go Friday?' I asked. Friday shook his head and said, 'How go? Friday no swim so far.' 'I will make you a canoe, Friday, if youwant to go home' said I.");
			$(".show-first .p3").html("'Oh, no, master, me make them no eat you. Me make them much love you.' Then he told me how kind they had been to seventeen white men who had been ship-wrecked and thrown on shore in a terrible storm. ");
			$(".chapter-popup article .popup-story").html("After this I began to think strongly of going with Friday, hoping that by joining with the seventeen white men there might find some way to cross the ocean and return to my native land. I took Friday to see my boats. He thought that the second one I had made was too small. He liked the size of the larger boat, but it was cracked and rotten. He said that we could sail over tohis country in one of that size.");
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