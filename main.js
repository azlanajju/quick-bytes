   // for menu
   const body = document.querySelector("body");
   const navbar = document.querySelector(".navbar");
   const menuBtn = document.querySelector(".menu-btn");
   const cancelBtn = document.querySelector(".cancel-btn");
   menuBtn.onclick = ()=>{
     navbar.classList.add("show");
     menuBtn.classList.add("hide");
     body.classList.add("disabled");
   }
   cancelBtn.onclick = ()=>{
     body.classList.remove("disabled");
     navbar.classList.remove("show");
     menuBtn.classList.remove("hide");
   }
   window.onscroll = ()=>{
     this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
   }
   /* themes */
   function toggle() {
 
 document.querySelector('body').classList.toggle("dark");
}

// scroll button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// slider
// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//  showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//  let i;
//  let x = document.getElementsByClassName(slideId[no]);
//  if (n > x.length) {slideIndex[no] = 1}    
//  if (n < 1) {slideIndex[no] = x.length}
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//  }
//  x[slideIndex[no]-1].style.display = "block";  
// }







