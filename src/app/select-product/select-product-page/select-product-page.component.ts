import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { Product, ProductInfo } from 'src/app/models/product';
declare var $: any;

@Component({
	selector: 'app-select-product-page',
	templateUrl: './select-product-page.component.html',
	styleUrls: ['./select-product-page.component.scss']
})
export class SelectProductPageComponent implements OnInit {

	slideIndex = 1;
	product!: Product;
	sku: string | null = '';
	private sub: any;

	constructor(private router: Router,
		private activatedRoute: ActivatedRoute,
		private mainService: MainService) { }

	ngOnInit(): void {

		this.sub = this.activatedRoute.parent?.paramMap.subscribe(params => {
			this.sku = params.get('sku');
		});
		this.getProductById();
		this.showSlides(this.slideIndex);

		$('#slick2').slick({});
	}

	getProductById() {

		if (this.sku && this.sku !== '') {
			this.mainService.getProductBySku(this.sku).subscribe(
				data => {
					this.product = data;
				}
			);
		}
	}

	openCart() {
		let skusString = localStorage.getItem('skus');
		if (skusString) {
			let skus = skusString.split(',');
			skus.push(this.product.sku);
			localStorage.setItem('skus', skus.toString());
		} else {
			localStorage.setItem('skus', this.product.sku);
		}
		this.router.navigate(['/cart']);
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
		if (n > slides.length) {
			this.slideIndex = 1
		}

		if (n < 1) {
			this.slideIndex = slides.length
		}

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

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}