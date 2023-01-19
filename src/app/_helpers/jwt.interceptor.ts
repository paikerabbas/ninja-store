import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

	constructor(private authenticationService: AuthenticationService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const user = this.authenticationService.userValue;
		const isLoggedIn = user;
		const isApiUrl = request.url.startsWith(environment.apiUrl);
		console.log('heloo-----')
		console.log(isLoggedIn)
		console.log(isApiUrl)
		if (isLoggedIn && isApiUrl) {

			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${this.authenticationService.jwtToken}`
				}
			});
		}

		return next.handle(request);
	}
}
