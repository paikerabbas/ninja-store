import { Component, OnInit } from '@angular/core';
import { ProductInfo } from 'src/app/_models/product';

@Component({
	selector: 'app-menwear-dashboard',
	templateUrl: './menwear-dashboard.component.html',
	styleUrls: ['./menwear-dashboard.component.scss']
})
export class MenwearDashboardComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	topBrands: ProductInfo[] = [
		{
			sku: 'WGH5364',
			name: 'GUCCI',
			price: 500,
			imgUrl: 'assets/images/home/home1.jpg'
		},
		{
			sku: 'HFD529',
			name: 'ARMANI',
			price: 7800,
			imgUrl: 'assets/images/home/home2.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'LEVIS',
			price: 600,
			imgUrl: 'assets/images/home/home3.jpg'
		},
		{
			sku: 'IRO5769',
			name: 'KILLER',
			price: 300,
			imgUrl: 'assets/images/home/home4.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'LEVIS TWO',
			price: 600,
			imgUrl: 'assets/images/home/home13.jpg'
		},
		{
			sku: 'IRO5769',
			name: 'KILLER TWO',
			price: 300,
			imgUrl: 'assets/images/home/home14.jpg'
		},

	];


	categoriesToBag: ProductInfo[] = [
		{
			sku: 'WGH5364',
			name: 'Shirt',
			price: 500,
			imgUrl: 'assets/images/home/home11.jpg'
		},
		{
			sku: 'HFD529',
			name: 'T-Shirt',
			price: 7800,
			imgUrl: 'assets/images/home/home12.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'Jeans',
			price: 600,
			imgUrl: 'assets/images/home/home13.jpg'
		},
		{
			sku: 'IRO5769',
			name: 'Trouser',
			price: 300,
			imgUrl: 'assets/images/home/home14.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'Jeans',
			price: 600,
			imgUrl: 'assets/images/home/home13.jpg'
		},
		{
			sku: 'IRO5769',
			name: 'Trouser',
			price: 300,
			imgUrl: 'assets/images/home/home14.jpg'
		}

	];

	categoriesToBag2: ProductInfo[] = [
		{
			sku: 'WGH5364',
			name: 'All White Indian Wear',
			price: 500,
			imgUrl: 'assets/images/home/home11.jpg'
		},
		{
			sku: 'HFD529',
			name: 'Ethnic Casuals',
			price: 7800,
			imgUrl: 'assets/images/home/home12.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'Printed Kurta Sets',
			price: 600,
			imgUrl: 'assets/images/home/home13.jpg'
		},
		{
			sku: 'IRO5769',
			name: 'Everyday Kurtas',
			price: 300,
			imgUrl: 'assets/images/home/home14.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'Handpicked Trendy',
			price: 600,
			imgUrl: 'assets/images/home/home16.jpg'
		},
		{
			sku: 'KSR83789',
			name: 'Handpicked Trendy ',
			price: 600,
			imgUrl: 'assets/images/home/home15.jpg'
		}

	];

}
