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
		firstname: [''],
		middlename: [''],
		lastname: [''],
		email: [''],
		mobile: [''],
		country: [''],
		password: [''],
	});


}
