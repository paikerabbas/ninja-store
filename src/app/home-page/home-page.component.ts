import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Product, ProductInfo } from '../models/product';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	title = "Carousel";

	latestWomenWear: ProductInfo[] = [];

	constructor(private router: Router,
		private mainService: MainService) { }


	ngOnInit(): void {
		this.mainService.getLatestProductInfo().subscribe(
			data => {
				this.latestWomenWear = data;
			}
		);
	}
	viewProduct(productInfo: ProductInfo) {

		this.router.navigate(['/select-product', productInfo.sku]);


	}

}
