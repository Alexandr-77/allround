// burger
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}


function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
// ===============================


// ========= slyder ==========
$('.slider__box').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
	 {
		breakpoint: 1500,
		settings: {
		 arrows: false,
		}
	 },
 
  ]
 
 });



// отправка формы =============>
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка была отправлена.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// ============================
// ===============================================

new WOW().init();