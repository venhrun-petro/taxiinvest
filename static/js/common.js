var element = document.querySelector("header");
 
function myscroll() {  
  if (window.pageYOffset > 50) {
    element.classList.add("active"); 
  } else{
    element.classList.remove("active"); 
  }
}; 
window.onscroll = myscroll;
myscroll();

let video = document.getElementById("async-video"); 
if(video === null && undefined ){
    let createVideo = document.createElement("video");
    createVideo.setAttribute("class", "bg-video");
    createVideo.setAttribute("loop", "1");
    createVideo.setAttribute("muted", "true");
    createVideo.setAttribute("autoplay", "autoplay");
    createVideo.setAttribute("playsinline", "1");
    createVideo.setAttribute("id", "myVideo");

    let createSource = document.createElement("source");
    createSource.setAttribute("src", video.dataset.video);
    createSource.setAttribute("poster", "/img/hero.webp");
    createSource.setAttribute("type", "video/mp4");
    setTimeout(function(){ 
        createVideo.appendChild(createSource);
        createVideo.load();
        let hero = document.getElementById("hero");
        hero.appendChild(createVideo); 
    }, 1000); 
}
var burger = document.getElementsByClassName("hamburger");
let nav =  document.getElementsByClassName("header_cont_nav_list");
for (var i = 0; i < burger.length; i++) {
  burger.item(i).addEventListener('click', function(e){
    e.preventDefault();
    nav[0].classList.toggle("active");
    burger[0].classList.toggle("is-active");
 });
}


var videoFrame = document.getElementsByClassName("block-video"); 
for (var i = 0; i < videoFrame.length; i++) {
  for (var play = 0; play < videoFrame.item(i).childNodes.length; play++) {
    if(videoFrame.item(i).childNodes[play].className !== undefined){

        function searchElement(elem, className, f) {
          let elemCall = f || function (){};
          if (elem.className === className && elem.className !== undefined ) { 
               return elemCall.call(elem); 
          }
          return elem   
        }
        console.log(searchElement(videoFrame.item(i).childNodes[play], "block-video_play", 
          function(){
            console.log(this)
            this.addEventListener('click', function(e){
                  e.preventDefault();
                  this.parentElement.classList.toggle("active")
                  // modal.classList.toggle("active");
                  console.log(this.parentElement) 
              }); 
          }
        ))

    }
 
    
    //  searchElement(videoFrame.item(i).childNodes[play], "block-video_play").addEventListener('click', function(e){
    //     e.preventDefault();
    //     this.parentElement.classList.toggle("active")
    //     // modal.classList.toggle("active");
    //     console.log(this.parentElement) 
    // }, false); 



    

  //   if (videoFrame.item(i).childNodes[play].className == "block-video_play" ) {   
  //     videoFrame.item(i).childNodes[play].addEventListener('click', function(e){
  //       e.preventDefault();
  //       this.parentElement.classList.toggle("active")
  //       // modal.classList.toggle("active");
  //       console.log(this.parentElement)
  //     })   
  // }  
           
  }  
 
}


// var inventory = [
//   {name: 'яблука', quantity: 2},
//   {name: 'банани', quantity: 0},
//   {name: 'вишні', quantity: 5}
// ];

// function findCherries(fruit) {
//   return fruit.name === 'вишні';
// }

// console.log(inventory.find(fruit => fruit.name ));







// header_cont_nav_list
// hamburger


// $('.video_cont_play').click(function() {
//   $('.video_modal').addClass('active');
//   let createIframe = document.createElement("iframe");
//   createIframe.setAttribute("frameborder", "0");
//   createIframe.setAttribute("allow", "autoplay; fullscreen");
//   createIframe.setAttribute("allowfullscreen", "");
//   createIframe.setAttribute("src", frame);
//   $('.video_modal_cont').append(createIframe);
//   console.log('close')
// });
 
 
 


// let frame = $('.video_cont').data("video");
// $('.video_cont_play').click(function() {
//   $('.video_modal').addClass('active');
//   let createIframe = document.createElement("iframe");
//   createIframe.setAttribute("frameborder", "0");
//   createIframe.setAttribute("allow", "autoplay; fullscreen");
//   createIframe.setAttribute("allowfullscreen", "");
//   createIframe.setAttribute("src", frame);
//   $('.video_modal_cont').append(createIframe);
//   console.log('close')
// });

 
// $('.video_modal_close').click(function() {
//   $('.video_modal').removeClass('active');
//   $( ".video_modal iframe" ).remove();
// });

// $('.faq_item_title').toggleClass('inactive-header');
	
// 	//Set The Accordion Content Width
// 	var contentwidth = $('.faq_item_title').width();
// 	$('.faq_item_content').css({'width' : contentwidth });
	
// 	//Open The First Accordion Section When Page Loads
// 	$('.faq_item_title').first().toggleClass('active-header').toggleClass('inactive-header');
// 	$('.faq_item_content').first().slideDown().toggleClass('open-content');
	
// 	// The Accordion Effect
// 	$('.faq_item_title').click(function () {
// 		if($(this).is('.inactive-header')) {
// 			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
// 			$(this).toggleClass('active-header').toggleClass('inactive-header');
// 			$(this).next().slideToggle().toggleClass('open-content');
// 		}
		
// 		else {
// 			$(this).toggleClass('active-header').toggleClass('inactive-header');
// 			$(this).next().slideToggle().toggleClass('open-content');
// 		}
//   }); 


 