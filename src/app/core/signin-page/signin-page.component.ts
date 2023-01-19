import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
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


}
