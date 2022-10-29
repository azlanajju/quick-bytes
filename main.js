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
 
/* function for ep1 */
   /* slides */
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1] += "active";
}
/* hide unhide*/
function hide1(){
  
 document.getElementById("background").className='thumbnailblur';
 
  document.getElementById('hide1').style.display="block";
  
  document.getElementById('blur1').style.display="block";
}
function hideagain1(){
  
  
 document.getElementById("background").className='thumbnail';
 
  document.getElementById('hide1').style.display="none"; 
  
  document.getElementById('blur1').style.display="none";
}

/* function for ep2*/
   
/* hide unhide*/
function hide2() {

  document.getElementById("background").className = 'thumbnailblur';

  document.getElementById('hide2').style.display = "block";

  document.getElementById('blur2').style.display = "block";
}

function hideagain2() {


  document.getElementById("background").className = 'thumbnail';

  document.getElementById('hide2').style.display = "none";

  document.getElementById('blur2').style.display = "none";
}

