import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
constructor(private router: Router, private route: ActivatedRoute ) {}

isAuthRouteActive(): boolean {
  return this.router.url.includes('/auth')
}

  title = 'angular-temp';
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 1000,
    items: 1,
  };

  testimonialOptions: OwlOptions = {
    navSpeed: 1000,
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
}
