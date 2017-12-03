$(document).ready(function(){
	//alert("Bienvenidos a mi casa!");
	//$(".header").hide().slideDown(600);

	// $('.banner').slick({
	//   dots: true,
	//   infinite: true,
	//   speed: 500,
	//   cssEase: 'linear'
	// });

	$('.banner').slick();


	$("#subir").on("click", function(event){
		event.preventDefault();
		$("html, body").animate({
			scrollTop: "0"
		}, 500);
	})


});