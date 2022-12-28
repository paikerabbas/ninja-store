import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  num = 0;
  constructor() { }

  ngOnInit(): void {
  }



  @HostListener('window:scroll', [])
  onScroll() {
    window.scrollY >= 100 ? (this.isScrolled = true) : (this.isScrolled = false);
    this.num = window.pageYOffset;
  }

}
