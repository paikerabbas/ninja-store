import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Product, ProductInfo } from '../models/product';
declare var $: any;

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	title = "Carousel";

	latestWomenWear: ProductInfo[] = [];
	latestMenWear: ProductInfo[] = [];

	constructor(private router: Router,
		private mainService: MainService) { }


	ngOnInit(): void {

		$('.slick-1').slick({});
		this.mainService.getLatestProductInfo().subscribe(
			data => {
				this.latestWomenWear = data;
			}
		);

		this.mainService.getLatestMensWearInfo().subscribe(
			data => {
				this.latestMenWear = data;
			}
		);

	}
	viewProduct(productInfo: ProductInfo) {
		this.router.navigate(['/select-product', productInfo.sku]);
	}

}
