import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-dashboard',
  templateUrl: './cart-dashboard.component.html',
  styleUrls: ['./cart-dashboard.component.scss']
})
export class CartDashboardComponent implements OnInit {

  item = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
