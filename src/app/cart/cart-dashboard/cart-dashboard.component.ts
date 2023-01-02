import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cart-dashboard',
	templateUrl: './cart-dashboard.component.html',
	styleUrls: ['./cart-dashboard.component.scss']
})
export class CartDashboardComponent implements OnInit {

	selectedItem: Item[] = [];
	totalAmt = 0

	constructor() { }

	ngOnInit(): void {
		this.selectedItem = [...this.allItem];
		this.totalAmt = this.calculateTotalAmt();
	}


<<<<<<< HEAD
  itemList: Item[] = [
    { imgUrl: 'assets/images/cart/product1.jpg', name: 'Spring Jacket', brand: 'Dolce & Gabbana', color: 'RED', size: 'M', price: 200, qty: 1 },
    { imgUrl: 'assets/images/cart/product2.jpg', name: 'T-Shirt', brand: 'Levis', color: 'Green', size: 'L', price: 800, qty: 2 },
    { imgUrl: 'assets/images/cart/product3.jpg', name: 'Shoes', brand: 'Nike', color: 'Green', size: '41', price: 1250, qty: 4 },
    { imgUrl: 'assets/images/cart/product4.jpg', name: 'Football', brand: 'Reebok', color: 'White', size: 'Default', price: 20, qty: 1 }
  ];
=======
	increase(index: number) {
		this.allItem[index].qty = this.allItem[index].qty + 1;
		this.totalAmt = this.calculateTotalAmt();
	}
>>>>>>> e02e691fc31b146018b2b31d51c1c752e6f7baea

	decrease(index: number) {
		if (this.allItem[index].qty > 1) {
			this.allItem[index].qty = this.allItem[index].qty - 1;
			this.totalAmt = this.calculateTotalAmt();

		}
	}

	allItem: Item[] = [
		{ id: 101, imgUrl: 'assets/images/home/home1.jpg', name: 'Spring Jacket', brand: 'Dolce & Gabbana', color: 'RED', size: 'M', price: 200, qty: 1 },
		{ id: 102, imgUrl: 'assets/images/home/home2.jpg', name: 'T-Shirt', brand: 'Levis', color: 'Green', size: 'L', price: 800, qty: 2 },
		{ id: 103, imgUrl: 'assets/images/home/home3.jpg', name: 'Shoes', brand: 'Nike', color: 'Green', size: '41', price: 1250, qty: 4 },
		{ id: 104, imgUrl: 'assets/images/home/home1.jpg', name: 'Football', brand: 'Reebok', color: 'White', size: 'Default', price: 20, qty: 1 }
	];

	calculateTotalAmt() {
		this.totalAmt = 0;
		this.selectedItem.forEach(element => {
			this.totalAmt = this.totalAmt + (element.price * element.qty);
		});
		return this.totalAmt;
	}

	removeItem(item: Item, index: number) {
		const i = this.selectedItem.findIndex(element => element.id === item.id);
		let cartItems = document.getElementsByClassName("cart__item") as HTMLCollectionOf<HTMLElement>;
		let cartRmvBtns = document.getElementsByClassName('cart__action-btn_danger') as HTMLCollectionOf<HTMLElement>;
		let cartAddBtns = document.getElementsByClassName('cart__action-btn_success') as HTMLCollectionOf<HTMLElement>;


		if (i > -1) {
			this.selectedItem.splice(i, 1);
			for (let i = 0; i < cartItems.length; i++) {
				if (i === index) {
					cartItems[i].className = cartItems[i].className.replace("cart__item-selected", "");
					cartRmvBtns[i].style.display = 'none';
					cartAddBtns[i].className = cartAddBtns[i].className.replace("d-none", "");
					cartAddBtns[i].style.display = 'block';

					//substract amount of removed item from total amount
					this.totalAmt -= item.price * item.qty;
				}

			}
		} else {
			this.selectedItem.push(item);
			for (let i = 0; i < cartItems.length; i++) {
				if (i === index) {
					cartItems[i].className += " cart__item-selected";
					cartAddBtns[i].style.display = 'none';
					cartRmvBtns[i].style.display = 'block';
					//Add the amount of added item into total amount
					this.totalAmt += item.price * item.qty;
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
