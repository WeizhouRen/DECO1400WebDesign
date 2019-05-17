$(document).ready(function(){
	// Adding a "JavaScript is Enabled" Body Class
	$("body").addClass("js");
	//Expand button

	$("#other-version .version-element .info .expand-button a").click(function(event) {
		$(this).parent().parent().addClass("expanded");
		event.preventDefault();
	});	

	$("#sitemap").toggleClass("not-show");
	$("#view-sitemap button").click(function(){
		$("#sitemap").toggleClass("not-show");
		$("#sitemap").toggleClass("show");
	});
});