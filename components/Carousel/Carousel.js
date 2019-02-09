class Carousel {
  constructor(carouselNode) {
    this.element = carouselNode;
    this.leftBtn = this.element.querySelector('.left-button');
    this.rightBtn = this.element.querySelector('.right-button');
    this.images = this.element.querySelectorAll('img');
    this.currentIdx = 0;
    this.maxIdx = this.images.length - 1;
    this.displayCurrIdx();
    this.rightBtn.addEventListener('click', () => {
      this.increaseIdx();
      this.displayCurrIdx();
    });
    this.leftBtn.addEventListener('click', () => {
      this.decreaseIdx();
      this.displayCurrIdx();
    });
  }
  displayCurrIdx() {
    this.images.forEach(e => e.style.display = 'none');
    this.images[this.currentIdx].style.display = 'flex';
  }
  increaseIdx() {
    this.currentIdx += 1;
    if (this.currentIdx > this.maxIdx) {
      this.currentIdx = 0;
    }
  }
  decreaseIdx() {
    this.currentIdx -= 1;
    if (this.currentIdx < 0) {
      this.currentIdx = this.maxIdx;
    }
  }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/