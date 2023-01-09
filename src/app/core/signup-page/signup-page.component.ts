import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {



	constructor(private fb: FormBuilder,
		private mainService: MainService) {
	}

	ngOnInit(): void {

	}


	onSignupFormSubmit() {
		if (this.signupForm.invalid) {
			return;
		}
		let user: User = this.signupForm.value as User;
		console.log(user)
		this.mainService.registerUser(user).subscribe(
			data => {
				alert(JSON.stringify(data));
			}
		);
	}


	signupForm = this.fb.group({
		firstname: ['', [Validators.required]],
		middlename: [''],
		lastname: ['', [Validators.required]],
		email: [''],
		mobile: [''],
		country: [''],
		password: [''],
	});

	get firstname() {
		return this.signupForm.get('firstname');
	}
	get lastname() {
		return this.signupForm.get('lastname');
	}



}
