import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cart-dashboard',
	templateUrl: './cart-dashboard.component.html',
	styleUrls: ['./cart-dashboard.component.scss']
})
export class CartDashboardComponent implements OnInit {

	selectedItem: Item[] = [];
	constructor() { }

	ngOnInit(): void {
		this.selectedItem = [...this.allItem];
	}

	increase(index: number) {
		this.allItem[index].qty = this.allItem[index].qty + 1;
	}

	decrease(index: number) {
		if (this.allItem[index].qty > 1) {
			this.allItem[index].qty = this.allItem[index].qty - 1;
		}
	}

	allItem: Item[] = [
		{ id: 101, imgUrl: 'assets/images/home/home1.jpg', name: 'Spring Jacket', brand: 'Dolce & Gabbana', color: 'RED', size: 'M', price: 200, qty: 1 },
		{ id: 102, imgUrl: 'assets/images/home/home2.jpg', name: 'T-Shirt', brand: 'Levis', color: 'Green', size: 'L', price: 800, qty: 2 },
		{ id: 103, imgUrl: 'assets/images/home/home3.jpg', name: 'Shoes', brand: 'Nike', color: 'Green', size: '41', price: 1250, qty: 4 },
		{ id: 104, imgUrl: 'assets/images/home/home1.jpg', name: 'Football', brand: 'Reebok', color: 'White', size: 'Default', price: 20, qty: 1 }
	];

	get totalAmt() {
		let total = 0
		this.allItem.forEach(element => {
			total = total + (element.price * element.qty);
		});
		return total;
	}

	removeItem(item: Item, index: number) {
		const i = this.selectedItem.findIndex(element => element.id === item.id);
		let cartItems = document.getElementsByClassName("cart__item") as HTMLCollectionOf<HTMLElement>;

		if (i > -1) {
			this.selectedItem.splice(i, 1);
			for (let i = 0; i < cartItems.length; i++) {
				if (i === index) {
					cartItems[i].className = cartItems[i].className.replace("cart__item-selected", "");
				}
			}
		} else {
			this.selectedItem.push(item);
			for (let i = 0; i < cartItems.length; i++) {
				if (i === index) {
					cartItems[i].className += " cart__item-selected";
				}
			}
		}
	}
}


export interface Item {
	id: number;
	imgUrl: string;
	name: string;
	brand: string;
	color: string;
	size: string;
	price: number;
	qty: number;
}
