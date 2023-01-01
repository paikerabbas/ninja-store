import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  slideIndex = 1;
  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    $('#slick2').slick({
    });
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    // let captionText = document.getElementById("caption") as HTMLElement;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    // if (captionText) {
    //   captionText.innerHTML = dots[this.slideIndex - 1].getAttribute('alt')!;
    // }
  }

}
