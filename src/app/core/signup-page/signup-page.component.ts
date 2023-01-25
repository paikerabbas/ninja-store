import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
	selector: 'app-signup-page',
	templateUrl: './signup-page.component.html',
	styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {



	constructor(private fb: FormBuilder,
		private authenticationService: AuthenticationService) {
	}

	ngOnInit(): void {

	}


	onSignupFormSubmit() {
		if (this.signupForm.invalid) {
			return;
		}
		// let user: User = this.signupForm.value as User;
		console.log(this.signupForm.value)
		this.authenticationService.registerUser(this.signupForm.value).subscribe(
			data => {
				alert(JSON.stringify(data));
			}
		);
	}


	signupForm = this.fb.group({
		firstname: ['', [Validators.required, Validators.minLength(3)]],
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
