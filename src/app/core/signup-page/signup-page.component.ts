import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {



	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {

	}


	onSignupFormSubmit() {
		alert(JSON.stringify(this.signupForm.value));
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
