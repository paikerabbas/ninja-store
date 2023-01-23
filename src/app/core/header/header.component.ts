import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
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

	@ViewChildren('abc', { read: ElementRef }) childComp!: QueryList<ElementRef>

	constructor(private mainService: MainService, private renderer: Renderer2, private elementRef: ElementRef) { }

	ngOnInit(): void {
		this.getCartList();
	}

	ngAfterViewChecked() {
		const btnElement = (<HTMLElement>this.elementRef.nativeElement).querySelectorAll('.header__nav-dropdown-content');
		console.log(btnElement.length)
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
