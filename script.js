gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






var tl = gsap.timeline();
tl.from("#page1 img", {
  scale: 0.4,
  duration: 1,
  borderRadius:"30px",
  ease: Power4.easeOut,
  delay: 0.8,
})
tl.from("#n1", {
  y: -200,
  duration: 0.3,
  opacity: 0,

})
tl.from("#nav", {
  y: -200,
  duration: 1,
  opacity: 0,
});


var textDATA;
var splitedTEXT;
var clutter;


var head = document.querySelectorAll(".qwe")
head.forEach(function (elem) {
  textDATA = elem.textContent
  splitedTEXT = textDATA.split("")
  clutter = ""
  splitedTEXT.forEach(function (e) {
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter
})





gsap.to("#text h1 span", {
  color: "#E3E3C4",
  stagger: 0.2,

  _scrollTrigger: {
    trigger: "#text h1 span",
    scroller: "#main",
    start: "top 40%",
    // markers:true,
    end: "top 20%",
    scrub: 3,
  },
  get scrollTrigger() {
    return this._scrollTrigger;
  },
  set scrollTrigger(value) {
    this._scrollTrigger = value;
  },
});



gsap.to("#svg2,#svg3", {
  left: "0%",
  scrollTrigger: {
    trigger: "#page2 #svg2",
    scroller: "#main",
    start: "top 100%",
    // markers:true,
    scrub: 2,
  }
})





var textDATA2;
var splitedTEXT2;
var clutter2;

var head2 = document.querySelectorAll("#text2 h1,#text6 h2,#text7 h1,#text9 h1")
head2.forEach(function (elem2) {
  textDATA2 = elem2.textContent
  splitedTEXT2 = textDATA2.split("")
  clutter2 = ""
  splitedTEXT2.forEach(function (e2) {
    clutter2 += `<span>${e2}</span>`
  })
  elem2.innerHTML = clutter2
})
console.log(clutter2);

gsap.to("#text2 h1 span", {
  color: "#5b6647",
  stagger: 0.2,

  scrollTrigger: {
    trigger: "#text2 h1 span",
    scroller: "#main",
    start: "top 80%",
    end: "top 40%",
    scrub: 3,
    // markers:true,
  }
});
gsap.to("#text6 h2 span", {
  color: "#e3e3c4",
  stagger: 0.2,

  scrollTrigger: {
    trigger: "#text6 h2 span",
    scroller: "#main",
    start: "top 70%",
    end: "top 60%",
    scrub: 3,
    // markers:true,
  }
});
gsap.to("#text7 h1 span", {
  color: "#444b34",
  stagger: 0.2,

  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 25%",
    end: "top 0%",
    scrub: 3,
    // markers:true,
  }
});
gsap.to("#text9 h1 span", {
  color: "#e3e3c4",
  stagger: 0.2,

  scrollTrigger: {
    trigger: "#text9 h1 span",
    scroller: "#main",
    start: "top 80%",
    end: "top 40%",
    scrub: 3,
    // markers:true,
  }
});


gsap.from("#para9",{
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    strat:"top 50%",
    end:"top 45%",
    scrub:2,
    // marker:true,
  }
})






gsap.from("#left31 img,#left31 p,#explore", {
  y: 20,
  delay: 3,
  stagger: 0.4,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page31",
    start: "top 80%",
    end: "top 50%",
    scroller: "#main",
    scrub: 2,
    // markers:true,
  }


})

gsap.from("#img1,#img2", {
  y: 20,
  delay: 3,
  stagger: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page31",
    start: "top 70%",
    end: "top 40%",
    scroller: "#main",
    scrub: 2,
    // markers:true,
  }
})

gsap.to("#svgno1", {
  left: "-50%",
  scrollTrigger: {
    trigger: "#page6 #svgno1",
    scroller: "#main",
    start: "top 100%",
    // markers:true,
    scrub: 2,
  }
})
gsap.to("#svgno2", {
  left: "-80%",
  scrollTrigger: {
    trigger: "#page6 #svgno2",
    scroller: "#main",
    start: "top 100%",
    // markers:true,
    scrub: 2,
  }
});

gsap.to("#svgno11", {
  x:-600,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 100%",
    end:"top 0%",

    // markers:true,
    scrub: 2,
  }
})
gsap.to("#svgno22", {
  x:-1000,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 100%",
    end:"top 0%",

    // markers:true,
    scrub: 2,
  }
})

gsap.from("#l611,#r622", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#content6",
    start: "top 80%",
    end: "top 70%",
    scroller: "#main",
    scrub: 2,
    // markers:true,
  }
})
gsap.from("#r611", {
  y: 200,
  opacity: 0,
  
  scrollTrigger: {
    trigger: "#content6",
    start: "top 70%",
    end: "top 80%",
    scroller: "#main",
    scrub: 2,
    // markers:true,
  }
})
gsap.from("#arrow", {
  y: 200,
  
  stagger: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#content6",
    start: "top 10%",
    end: "top 0%",
    scroller: "#main",
    scrub: 2,
    // markers:true,
  }
})



tl.from("#img71",{
  left:"-5%",
  scrollTrigger:{
   trigger:"#content7",
   scroller:"#main",
   start:"top 50%",
   end:"top 45%",
   scrub:1,
  }
  
},"opk")
tl.from("#img72",{
  right:"-5%",
  scrollTrigger:{
    trigger:"#content7",
    scroller:"#main",
    start:"top 50%",
    end:"top 45%",
    // markers:true,
    scrub:2,
  }
},"opk")

gsap.from("#remix h1,#remix p",{
  opacity:0,
  scrollTrigger:{
    trigger:"#content7",
    scroller:"#main",
    start:"top 50%",
    end:"top 42%",
    scrub:0.5,
  }
})
gsap.from("#explore7",{
  opacity:0,
  y:100,
  scrollTrigger:{
    trigger:"#content7",
    scroller:"#main",
    start:"top 10%",
    end:"top 0%",
    scrub:3,
  }
})

gsap.to("#page8 img",{
  top:"0%",
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    start:"top 100%",
    end:"top 0%",
    scrub:0,
  }
})
gsap.to("#page11 img",{
  top:"0%",
  scrollTrigger:{
    trigger:"#page11",
    scroller:"#main",
    start:"top 100%",
    end:"top 0%",
    scrub:0,
  }
})

gsap.to(".svgno911", {
  x:-600,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "top 100%",
    end:"top 0%",

    // markers:true,
    scrub: 2,
  }
})
gsap.to(".svgno922", {
  x:-900,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "top 110%",
    end:"top 0%",

    // markers:true,
    scrub: 2,
  }
})

var tll = gsap.timeline();

tll.from("#img92,#img93",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    // markers:true,
    start:"top 20%",
    end:"top 0%",
    
    scrub:1,
  }
})
tll.from("#img91",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    // markers:true,
    start:"top 5%",
    end:"top 0%",
    scrub:1,
  }
})
tll.from("#discover",{
  y:100,
  opacity:0,
  delay:5,
  scrollTrigger:{
    trigger:"#content9",
    scroller:"#main",
    // markers:true,
    start:"top -10%",
    end:"top 0%",
    scrub:2,
  }
})

gsap.from("#text10 h1,#para10,#leftimgg,.rightpp,#leftimggg,.rightppp,#opl",{
  y:100,
  stagger:2,
  opacity:0,
  scrollTrigger:{
    trigger:"#page10",
    scroller:"#main",
    start:"top 60%",
    end:"top 0%",
    scrub:3,
    
  }
})




// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
  
//   pagination: {
//     el: ".swiper-pagination",
//     type:"fraction",
//   },
//   navigation: {
//     prevEl: ".swiper-button-prev",
//     nextEl: ".swiper-button-next",
//   },
// });


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// var patent = document.querySelector("#parent");
// var right = document.querySelector("#head");
// var left = document.querySelector("#head2");

// var swiping = 0;
// right.addEventListener("click", function () {
//   swiping += 1290
//   patent.scrollTo(swiping, 0)
// })
// left.addEventListener("click", function () {
//   swiping -= 1290
//   patent.scrollTo(swiping, 0)
// });





