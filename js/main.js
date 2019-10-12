// language change pop-up
const item = document.querySelector('.dropdown-menu');

$('.nav-changeLanguage').click(function () {
	$('.dropdown-menu').toggleClass("show");
})

window.onclick = function (event) {
	if (!event.target.matches('.nav-changeLanguage')) {
		item.classList.remove('show');
	}
}


// expand animation 
$(".collabse-btn").click(function () {
	$(".header-table").toggleClass("header-table_active").focus;
	$(".header").toggleClass("header-active").focus;
	$('.header_logo').toggleClass('header_logo_fix');
	$(this).toggleClass("collapsed");
});

// gallery 
$('.gallery-btn').click(function() {
	$('.gallery').toggleClass('gallery-active').focus;
	$('.status-btn').toggleClass('status-btn_inactive').focus;
	$('.about-btn').toggleClass('active-about').focus;
});
// Gallery show




// Gallery main
$(document).ready(function () {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		}
	});
});


