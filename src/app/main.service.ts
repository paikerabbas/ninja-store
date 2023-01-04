import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Product, ProductInfo } from './models/product';

@Injectable({
	providedIn: 'root'
})
export class MainService {

	LATEST_PRODUCT_INFO = 'ninja/latest/womenwear';

	constructor(private httpClient: HttpClient) { }

	getLatestProductInfo(): Observable<ProductInfo[]> {
		// return this.httpClient.get(this.LATEST_PRODUCT);
		let productInfo: ProductInfo[] = [];
		this.womenWear.forEach(item => {
			productInfo.push({ sku: item.sku, name: item.name, price: item.price, imgUrl: item.imgUrls[0] });
		});
		return of(productInfo);
	}

	getProductBySku(sku: string): Observable<Product> {
		return of(this.womenWear.filter(item => item.sku === sku)[0]);
	}

	womenWear: Product[] = [
		{
			id: 1001,
			sku: 'WSKU1533',
			name: 'Barbie Kurti',
			price: 300,
			imgUrls: [
				'assets/images/product/img_5terre.jpg',
				'assets/images/product/img_lights.jpg',
				'assets/images/product/img_mountains.jpg',
				'assets/images/product/img_nature.jpg',
				'assets/images/product/img_snow.jpg',
				'assets/images/product/img_woods.jpg'
			],
			desc: 'I\'m a product description. I\'m a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.',
			productInfo: 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions.This is also a great space to write what makes this product special and how your customers can benefit from this item.',
			returnPolicy: 'I\'m a Return and Refund policy.I\'m a great place to let your customers know what to do in case they are dissatisfied with their purchase.Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
			shippingInfo: 'I\'m a shipping policy.I\'m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.'
		},
		{
			id: 1002,
			sku: 'WSKU1644',
			name: 'Banarsi Sari',
			price: 800,
			imgUrls: [
				'assets/images/product/img_5terre.jpg',
				'assets/images/product/img_lights.jpg',
				'assets/images/product/img_mountains.jpg',
				'assets/images/product/img_nature.jpg',
				'assets/images/product/img_snow.jpg',
				'assets/images/product/img_woods.jpg'
			],
			desc: 'I\'m a product description. I\'m a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.',
			productInfo: 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions.This is also a great space to write what makes this product special and how your customers can benefit from this item.',
			returnPolicy: 'I\'m a Return and Refund policy.I\'m a great place to let your customers know what to do in case they are dissatisfied with their purchase.Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
			shippingInfo: 'I\'m a shipping policy.I\'m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.'
		},
		{
			id: 1003,
			sku: 'WSKU1755',
			name: 'Plazzo',
			price: 900,
			imgUrls: [
				'assets/images/product/img_5terre.jpg',
				'assets/images/product/img_lights.jpg',
				'assets/images/product/img_mountains.jpg',
				'assets/images/product/img_nature.jpg',
				'assets/images/product/img_snow.jpg',
				'assets/images/product/img_woods.jpg'
			],
			desc: 'I\'m a product description. I\'m a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.',
			productInfo: 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions.This is also a great space to write what makes this product special and how your customers can benefit from this item.',
			returnPolicy: 'I\'m a Return and Refund policy.I\'m a great place to let your customers know what to do in case they are dissatisfied with their purchase.Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
			shippingInfo: 'I\'m a shipping policy.I\'m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.'
		},
		{
			id: 1004,
			sku: 'WSKU1866',
			name: 'Jeans',
			price: 1200,
			imgUrls: [
				'assets/images/product/img_5terre.jpg',
				'assets/images/product/img_lights.jpg',
				'assets/images/product/img_mountains.jpg',
				'assets/images/product/img_nature.jpg',
				'assets/images/product/img_snow.jpg',
				'assets/images/product/img_woods.jpg'
			],
			desc: 'I\'m a product description. I\'m a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.',
			productInfo: 'I\'m a product detail. I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions.This is also a great space to write what makes this product special and how your customers can benefit from this item.',
			returnPolicy: 'I\'m a Return and Refund policy.I\'m a great place to let your customers know what to do in case they are dissatisfied with their purchase.Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
			shippingInfo: 'I\'m a shipping policy.I\'m a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.'
		}
	]

}
