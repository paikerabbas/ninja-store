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

	latestKidWear: ProductInfo[] = [
		{
			sku: 'WGH5364',
			name: 'Half Pant',
			price: 300,
			imgUrl: 'assets/images/home/home1.jpg'
		},
		{
			sku: 'HFD527',
			name: 'Skirt',
			price: 700,
			imgUrl: 'assets/images/home/home2.jpg'
		},
		{
			sku: 'KSR8374',
			name: 'Frock',
			price: 600,
			imgUrl: 'assets/images/home/home3.jpg'
		},
		{
			sku: 'IRO5764',
			name: 'Shirt',
			price: 300,
			imgUrl: 'assets/images/home/home4.jpg'
		},

	];

}
