import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	urlPrefix = environment.urlPrefix;


	constructor(private httpClient: HttpClient) { }

	registerUser(signUpFormData: any): Observable<any> {
		const url = this.urlPrefix + "/user/register";
		return this.httpClient.post<any>(url, signUpFormData);
	}
}
