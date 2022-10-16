const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('nav-links li');
  //Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
  //Animate Links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    console.log(index / 5 + 0.2);

  });
}

navSlide();

//ARROW NEXT TO MULTIPLE LINKS

window.onload=function(){

  const divs = document.querySelectorAll(".button");
  const elementBefore = "↘";
  const elementAfter = "↗"

 for (var i = 0; i < divs.length; i++) {
   divs[i].innerHTML = elementBefore + divs[i].innerHTML;
 }

  document.onmouseover=function(e){
      const elementAfter = "↗";
      var e = e || window.event, el = e.target || el.srcElement;
      if(el.type == 'button') el.innerHTML = elementAfter + el.innerHTML.slice(1);
  };
  
 
  document.onmouseout=function(e){
      var e = e || window.event, el = e.target || el.srcElement;
      if(el.type == 'button') el.innerHTML = elementBefore + el.innerHTML.substring(1);
  };
};


//


//ARROW NEXT TO LINK MENU 0

/*
window.onload=function(){


  document.onmouseover=function(a){
      var a = a || window.event, el = a.target || el.srcElement;
      if(el.type == 'button1') el.innerHTML = "↗ "+ el.innerHTML.substring(1); 
  };
  
  
  document.onmouseout=function(a){
      var a = a || window.event, el = a.target || el.srcElement;
      if(el.type == 'button1') el.innerHTML = "↘ " + el.innerHTML.substring(1);
  };
};

*/

// EFEKT 1 FADE IN 
$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() / 3;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) { $(this).fadeTo(1000, 1); }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) { $(this).fadeTo(1000, 1); }
      }
    });


  }).scroll(); //invoke scroll-handler on page-load
});

//BUTTON-UP 

var up = $('a.up');

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    up.addClass('show');
  } else {
    up.removeClass('show');
  }
});

up.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// NAV-BAR

var show = $('div.nav-bar');

$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    show.addClass('shown');
  } else {
    show.removeClass('shown');
  }
});
// slide up

const footSlide = () => {
  const ml11 = document.querySelector('.ml11');
  const nav = document.querySelector('.foot-links');
  const footLinks = document.querySelectorAll('foot-links li');
  //Toggle nav
  ml11.addEventListener('click', () => {
    nav.classList.toggle('foot-active');
  });
  //Animate Links
  footLinks.forEach((link, index) => {
    link.style.animation = `footLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    console.log(index / 5 + 0.2);

  });
}

footSlide();

// change text 

$(document).ready(function () {

  $(window).scroll(function () {
      if ($(this).scrollTop() > 10 ) { 
          //change yes to no
          $('a.ml7').html('M — P');
      } else {
          //set h1 text to yes
          $('a.ml7').html('Marija Plavčak');
      }
  });
});




