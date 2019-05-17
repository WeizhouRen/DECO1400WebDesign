$(document).ready(function(){

	$("body").addClass("js");
	
	$("#sitemap").toggleClass("not-show");
	$("#view-sitemap button").click(function(){
		$("#sitemap").toggleClass("not-show");
		$("#sitemap").toggleClass("show");
	});
});