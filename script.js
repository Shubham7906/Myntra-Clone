let modelBox = document.querySelector('#modelBox');
        setTimeout(()=>{
            modelBox.style.display = "block";
        },5000)
        setTimeout(()=>{
            modelBox.style.display = "block";
        },20000)

        function closeModel(){
            modelBox.style.display = "none";
        }
        
    let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

showSlide(slideIndex);