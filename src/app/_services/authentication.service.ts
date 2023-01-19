import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../_models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	urlPrefix = environment.urlPrefix;
	// authenticated = false;
	private userSubject: BehaviorSubject<User | null>;
	public user: Observable<User | null>;

	jwtToken = '';

	constructor(private httpClient: HttpClient,
		private router: Router) {
		this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
		this.user = this.userSubject.asObservable();
	}

	registerUser(signUpFormData: any): Observable<any> {
		const url = this.urlPrefix + "/user/register";
		return this.httpClient.post<any>(url, signUpFormData)
			.pipe(
				map(authResponse => {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('user', JSON.stringify(authResponse.user));
					localStorage.setItem('token', JSON.stringify(authResponse.token));
					this.jwtToken = authResponse.token;
					this.userSubject.next(authResponse.user);
					return authResponse;
				}));
	}

	authenticate(signInFormData: any): Observable<AuthResponse> {
		const url = this.urlPrefix + "/user/authenticate";
		return this.httpClient.post<AuthResponse>(url, signInFormData)
			.pipe(
				map(authResponse => {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('user', JSON.stringify(authResponse.user));
					localStorage.setItem('token', JSON.stringify(authResponse.token));
					this.jwtToken = authResponse.token;
					this.userSubject.next(authResponse.user);
					return authResponse;
				}));
	}


	logout() {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		this.userSubject.next(null);
		this.jwtToken = '';
		this.router.navigate(['/home']);
	}

	public get userValue() {
		return this.userSubject.value;
	}
}
