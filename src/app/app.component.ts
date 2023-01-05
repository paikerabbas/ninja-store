import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ninja-store';
	isScrolled = false;

	@HostListener('window:scroll', [])
	onScroll() {
		window.scrollY >= 100 ? (this.isScrolled = true) : (this.isScrolled = false);
		// this.num = window.pageYOffset;
	}
}
