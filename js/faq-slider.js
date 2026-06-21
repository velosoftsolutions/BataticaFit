const faqTrack = document.querySelector('.faq-track');
const dots = document.querySelectorAll('.faq-dot');
const cards = document.querySelectorAll('.faq-card');

let current = 0;
let direction = 1;

function moveSlider(){

    const cardWidth =
        cards[0].offsetWidth + 30;

    faqTrack.style.transform =
        `translateX(-${current * cardWidth}px)`;

    dots.forEach(dot =>
        dot.classList.remove('active')
    );

    if(dots[current]){
        dots[current].classList.add('active');
    }

}

setInterval(() => {

    const visibleCards = window.innerWidth > 1200 ? 3 :
                         window.innerWidth > 768 ? 2 : 1;

    const maxPosition =
        cards.length - visibleCards;

    if(current >= maxPosition){
        direction = -1;
    }

    if(current <= 0){
        direction = 1;
    }

    current += direction;

    moveSlider();

},4000);