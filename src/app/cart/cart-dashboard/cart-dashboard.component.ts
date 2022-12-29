import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-dashboard',
  templateUrl: './cart-dashboard.component.html',
  styleUrls: ['./cart-dashboard.component.scss']
})
export class CartDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  increase(index: number) {
    this.itemList[index].qty = this.itemList[index].qty + 1;
  }

  decrease(index: number) {
    if (this.itemList[index].qty > 0) {
      this.itemList[index].qty = this.itemList[index].qty - 1;
    }
  }

  itemList: Item[] = [
    { imgUrl: 'assets/images/cart/product1.jpg', name: 'Spring Jacket', brand: 'Dolce & Gabbana', color: 'RED', size: 'M', price: 200, qty: 1 },
    { imgUrl: 'assets/images/cart/product2.jpg', name: 'T-Shirt', brand: 'Levis', color: 'Green', size: 'L', price: 800, qty: 2 },
    { imgUrl: 'assets/images/cart/product3.jpg', name: 'Shoes', brand: 'Nike', color: 'Green', size: '41', price: 1250, qty: 4 },
    { imgUrl: 'assets/images/cart/product4.jpg', name: 'Football', brand: 'Reebok', color: 'White', size: 'Default', price: 20, qty: 1 }
  ];

}


export interface Item {
  imgUrl: string;
  name: string;
  brand: string;
  color: string;
  size: string;
  price: number;
  qty: number;
}
