
async function convertCurrency(){
    const convertTo=document.querySelector('.currency').value;
  const currencies = await getJson('https://api.exchangerate-api.com/v4/latest/USD');
  const rate= currencies.rates[converTo];
document.querySelector('.convert')
 .addEventListener('click',convertCurrency)}
 setInterval(function () {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}, 1000);

(function () {
  const slides = [
    '<img src="img/finpower-bg.jpg" width="450" height="500" alt="Consult">',
    '<img src="img/grafic.jpg" width="350" alt="Grafic">',
    '<img src="img/laptop.jfif" width="350" alt="Laptop">',
    '<img src="img/speaking.jpeg" width="350" alt="Speaking">',
    '<img src="img/computer.jpg" width="350" alt="Computer">',
  ];

  let currentSlide = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".three-carousel .slide-container");
    let html = '';
    html = slides[currentSlide];
    const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
    html += slides[nextSlide];
    const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
    html += slides[next2Slide];
    slideContainer.innerHTML = html;
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
  }

  // setInterval(nextSlide, 1000);
  showCurrentSlide();

  const btnNext = document.querySelector(".three-carousel .slide-next");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.querySelector(".three-carousel .slide-prev");
  btnPrev.addEventListener("click", prevSlide);
})();
