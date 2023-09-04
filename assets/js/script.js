let slideIndex = 0;
function change(num){
    slideIndex = parseInt(num) - 1 ;
    showSlides();
}
showSlides()
function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
    dots[i].innerHTML = '';
    dots[i].style.background = 'rgb(201,213,215)';
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].innerHTML  = `<i class="fa fa-home" aria-hidden="true"></i>`;
dots[slideIndex-1].style.background = 'none';
}
setInterval(showSlides, 10000);
// to show navigation bar 
tbars.addEventListener('click', showNav)
let header = document.querySelector("header")
header.addEventListener('click', hideNav)
function showNav(){
    nab.classList.toggle("shownav")
}
function hideNav(){
    nab.classList.remove("shownav")
}


function sendmessage(event){
    event.preventDefault();
    fetch("https://formspree.io/f/xoqodryw" , {
      method: 'POST',
      body: JSON.stringify({
        Name: `${document.querySelector('#fname').value}`,
        Email: `${document.querySelector('#email').value}`,
        Subject: `${document.querySelector('#subject').value}`,
        Message: `${document.querySelector('#message').value}`
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() =>{
        document.querySelector('#fname').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#message').value = ''
        document.querySelector('#subject').value = ''
        alert("Message Successfully Sent to the ")
    })
}