var element = document.querySelector("header");
 
function myscroll() {  
  if (window.pageYOffset > 10) {
    element.classList.add("active"); 
  } else{
    element.classList.remove("active"); 
  }
}; 
window.onscroll = myscroll;
myscroll();

var social = document.querySelectorAll(".social");
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){  
    social[0].classList.remove("active"); 
    social[0].classList.add("unactive");  
  }else if(st < 50 ){
    social[0].classList.remove("unactive");
    social[0].classList.remove("active"); 
  } else { 
    social[0].classList.add("active"); 
    social[0].classList.remove("unactive");
  }
  lastScrollTop = st <= 0 ? 0 : st;  
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  $('.phone-call').removeClass('active');
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
     $('.phone-call').addClass('active');
	}
}, false);




$('.faq_item_title').toggleClass('inactive-header');
	
	
	var contentwidth = $('.faq_item_title').width();
	$('.faq_item_content').css({'width' : contentwidth });
	
	
	$('.faq_item_title').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.faq_item_content').first().slideDown().toggleClass('open-content');
	
	
	$('.faq_item_title').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
  }); 


var burger = document.getElementsByClassName("hamburger");
let nav =  document.getElementsByClassName("header_cont_nav_list");
for (var i = 0; i < burger.length; i++) {
  burger.item(i).addEventListener('click', function(e){
    e.preventDefault();
    nav[0].classList.toggle("active");
    burger[0].classList.toggle("is-active");
 });
}


