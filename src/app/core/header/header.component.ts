import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() isScrolled = false;
	// num = 0;
	productSkuList: string[] = [];
	subscription = new Subscription();

	constructor(private mainService: MainService) { }

	ngOnInit(): void {
		this.getCartList();
	}

	getCartList() {
		const skuSub = this.mainService.productSkusState.subscribe(
			data => {
				if (data && (data !== '')) {
					this.productSkuList = data.split(',');
				}
			}
		);
		this.subscription.add(skuSub);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe()
	}
}
