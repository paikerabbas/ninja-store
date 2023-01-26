import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';

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


	constructor(private mainService: MainService,
		private renderer: Renderer2,
		private elementRef: ElementRef,
		private fb: FormBuilder,
		private authenticationService: AuthenticationService) { }

	ngOnInit(): void {
		this.getCartList();
	}
	btnElement: any;
	ngAfterViewChecked() {
		this.btnElement = (<HTMLElement>this.elementRef.nativeElement).querySelectorAll('.header__nav-dropdown-content');
		// console.log(btnElement.length)
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

	onSigninFormSubmit() {
		if (this.signinForm.invalid) {
			return;
		}
		// let user: User = this.signupForm.value as User;
		console.log(this.signinForm.value)
		this.authenticationService.authenticate(this.signinForm.value).subscribe(
			data => {
				alert(JSON.stringify(data));
			}
		);
	}

	signinForm = this.fb.group({
		email: ['', [Validators.required]],
		password: ['', [Validators.required]],
	});

	get email() {
		return this.signinForm.get('email');
	}
	get password() {
		return this.signinForm.get('password');
	}

	ngOnDestroy() {
		this.subscription.unsubscribe()
	}
}
