import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  isMonth: boolean = true;

  toMonthly() {
    this.isMonth = true;
  }

  toYearly() {
    this.isMonth = false;
  }
}
