import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  isScrolled: boolean = false;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 0;
  }

  
}
