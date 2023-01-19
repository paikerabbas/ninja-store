import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProduct, Product, ProductInfo } from './_models/product';
import { User } from './_models/user';

@Injectable({
	providedIn: 'root'
})
export class MainService {

	urlPrefix = environment.urlPrefix;

	productSkusSubject$ = new BehaviorSubject<string>('');
	public productSkusState = this.productSkusSubject$.asObservable();

	LATEST_PRODUCT_INFO = 'ninja/latest/womenwear';

	constructor(private httpClient: HttpClient) {
		let skusString = localStorage.getItem('skus');
		if (skusString) {
			this.productSkusSubject$.next(skusString);
		}
	}



	setProductSkuToLocalStorage(sku: string) {
		let skusString = localStorage.getItem('skus');
		if (skusString) {
			let skus = skusString.split(',');
			skus.push(sku);
			localStorage.setItem('skus', skus.toString());
		} else {
			localStorage.setItem('skus', sku);
		}
		skusString = localStorage.getItem('skus');
		if (skusString) {
			this.productSkusSubject$.next(skusString)
		}
	}

	getLatestProductInfo(): Observable<ProductInfo[]> {
		// return this.httpClient.get(this.LATEST_PRODUCT);
		let productInfo: ProductInfo[] = [];
		this.womenWear.forEach(item => {
			productInfo.push({ sku: item.sku, name: item.name, price: item.price, imgUrl: item.imgUrls[0] });
		});
		return of(productInfo);
	}

	getLatestMensWearInfo(): Observable<ProductInfo[]> {
		let productInfo: ProductInfo[] = [];
		this.menWear.forEach(element => {
			productInfo.push({ sku: element.sku, name: element.name, price: element.price, imgUrl: element.imgUrls[0] });

		});
		return of(productInfo);
	}

	getLatestMensfootWearInfo(): Observable<ProductInfo[]> {
		let productInfo: ProductInfo[] = [];
		this.menWear.forEach(element => {
			productInfo.push({ sku: element.sku, name: element.name, price: element.price, imgUrl: element.imgUrls[0] });

		});
		return of(productInfo);
	}

	getProductBySku(sku: string): Observable<Product> {
		let allWear: Product[] = [...this.womenWear, ...this.menWear];
		let cartProduct = allWear.filter(item => item.sku === sku)[0];

		return of(cartProduct);
	}

	cartProductList: CartProduct[] = [];


	womenWear: Product[] = [
		{
			id: 1001,
			sku: 'WSKU1533',
			name: 'Barbie Kurti',
			size: ['M'],
			available: 14,
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
			size: ['XXL'],
			available: 11,
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
			size: ['S'],
			available: 9,
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
			size: ['XL'],
			available: 7,
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
	];

	menWear: Product[] = [
		{
			id: 1011,
			sku: 'WSKU3562',
			name: 'Pajama',
			size: ['L'],
			available: 22,
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
			id: 1022,
			sku: 'WSKU8365',
			name: 'Formal Suit',
			size: ['XL'],
			available: 3,
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
		},
		{
			id: 1033,
			sku: 'WSKU9754',
			name: 'T-Shirt',
			size: ['M'],
			available: 16,
			price: 700,
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
			id: 1034,
			sku: 'WSKU10348',
			name: 'Sherwani',
			size: ['L'],
			available: 5,
			price: 12000,
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

	menfootWear: Product[] = [
		{
			id: 1011,
			sku: 'WSKU3562',
			name: 'Pajama',
			size: ['L'],
			available: 22,
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
			id: 1022,
			sku: 'WSKU8365',
			name: 'Formal Suit',
			size: ['XL'],
			available: 3,
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
		},
		{
			id: 1033,
			sku: 'WSKU9754',
			name: 'T-Shirt',
			size: ['M'],
			available: 16,
			price: 700,
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
			id: 1034,
			sku: 'WSKU10348',
			name: 'Sherwani',
			size: ['L'],
			available: 5,
			price: 12000,
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
